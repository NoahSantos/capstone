'use server';
// import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
require('dotenv').config({ path: './client/.env' });
import { cookies } from 'next/headers'

export async function login (email, password){
    let check = await fetch('http://localhost:7000/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
    }).then(response =>{
        return response.json();
    })

    if(check.success){
        return {status: 'success'}
    }else{
        return {status: 'fail', error: check.data};
    }
}

export async function signUp (email, password, password2){
    let taken = false;
    let users = await fetch('http://localhost:7000/users').then(response =>{
        return response.json();
    })

    users.data.map(user=>{
    if(user.email === email){
            taken = true;
        }
    })
    
    if(!taken && password === password2){
        let method = 'local';
        await fetch('http://localhost:7000/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, method}),
        })
        redirect('/login')
    }else{
        return 'fail';
    }
}