'use server';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

export async function login (email, password){
    let users = await fetch('http://localhost:7000/users').then(response =>{
        return response.json();
    })

    password = await bcrypt.hash(password, 10);

    users.data.map(user=>{
        if(user.email === email && user.password === password && user.method != 'google'){
            localStorage.setItem('userList', JSON.stringify(user.watchlist));
            redirect('/')
        }
    })
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
        let method = 'local'
        await fetch('http://localhost:7000/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, method}),
        })
        return 'success';
    }else{
        return 'fail';
    }
}