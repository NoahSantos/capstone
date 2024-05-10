'use server';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
require('dotenv').config({ path: './client/.env' });
import { cookies } from 'next/headers'

export async function login (email, password){
    let users = await fetch('http://localhost:7000/users').then(response =>{
        return response.json();
    })

    for (const user of users.data) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (user.email === email && passwordMatch && user.method !== 'google') {
            redirect('/');
        }
    }

    await fetch('http://localhost:7000/users/login')
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