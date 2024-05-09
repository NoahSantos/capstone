'use server';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

export async function login (email, password){
    let users = await fetch('http://localhost:7000/users').then(response =>{
        return response.json();
    })

    password = await bcrypt.hash(password, 10);

    for (const user of users.data) {
        console.log(user);
        console.log(email);
        console.log(user.email);
        console.log(email === user.email);
        console.log(password);
        console.log(user.password);
        console.log(password === user.password);
        console.log(user.method);
        console.log(user.method !== 'google');

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (user.email === email && password === user.password && user.method !== 'google') {
            console.log('run');
            redirect('/');
        }
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