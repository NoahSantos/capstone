'use server';
require('dotenv').config({ path: './client/.env' });
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login (email, password){
    let method = 'local'
    let check = await fetch('http://localhost:7000/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password, method}),
    })
    const result = await check.json();
    if(result.success){
        cookies().set('session', result.data, { maxAge: new Date(Date.now() + 2 * 60 * 60 * 1000) });
        return {status: true};
    }else{
        return {status: false, data: result.data};
    }
}

export async function signUp (email, password, password2){
    let method = 'local';
    let check = await fetch('http://localhost:7000/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password, password2, method}),
    }).then(response =>{
        return response.json();
    })

    if(check.success === 'logged'){
        return {status: 'log'}
    }else if(check.success){
        return {status: true};
    }else{
        return {status: false, data: check.data};
    }
}

export async function authorize() {
    let session = cookies().get('session');

    try {
        let check = await fetch('http://localhost:7000/users/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${session.value}`
            },
        });

        let result = await check.json();
        if(result.success){
            if(result.data.role === 0){
                return 'admin'
            }else if(result.data.role === 1){
                return 'editer'
            }else{
                // return {success: false, data: 'You do not have permission to access this page'}
                redirect('/');
            }
        }else{
            // return {success: false, data: 'You do not have permission to access this page'}
            redirect('/');
        }
    } catch (error) {
        // return {success: false, data: 'There was an error authenticating your credentials'}
        redirect('/');
    }
}