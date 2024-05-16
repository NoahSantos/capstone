'use server';
// import bcrypt from 'bcrypt';
require('dotenv').config({ path: './client/.env' });
import { cookies } from 'next/headers';

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

export async function authorize(){
    let session = cookies().get('session');
    console.log(session);
}