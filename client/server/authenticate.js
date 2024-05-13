'use server';
// import bcrypt from 'bcrypt';
require('dotenv').config({ path: './client/.env' });
import { cookies } from 'next/headers'

export async function login (email, password){
    let method = 'local'
    let check = await fetch('http://localhost:7000/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password, method}),
    }).then(response =>{
        return response.json();
    })

    if(check.success){
        cookies.set('session', check.data);
        return {status: true};
    }else{
        return {status: false, data: check.data};
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
    // let taken = false;
    // let users = await fetch('http://localhost:7000/users').then(response =>{
    //     return response.json();
    // })

    // users.data.map(user=>{
    // if(user.email === email){
    //         taken = true;
    //     }
    // })
    
    // if(!taken && password === password2){
    //     let method = 'local';
    //     await fetch('http://localhost:7000/users', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({email, password, password2, method}),
    //     })
    //     redirect('/login')
    // }else{
    //     return 'fail';
    // }
}