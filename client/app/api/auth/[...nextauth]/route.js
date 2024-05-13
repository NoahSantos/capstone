import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
require('dotenv').config({ path: './client/.env' });
// import { authOptions } from "@/server/auth";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks:{
        async signIn({user, account}){
            if(account.provider === 'google'){
                try {
                    let {email} = user;
                    let password = '';
                    let check = await fetch('http://localhost:7000/users/login', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({email, password}),
                    }).then(response =>{
                        return response.json();
                    })

                    if(check.success){
                        return {status: 'success'};
                    }else{
                        return {status: 'fail', error: check.data};
                    }
                    // let {email} = user;
                    // let taken = false;
                    // let users = await fetch('http://localhost:7000/users').then(response =>{
                    //     return response.json();
                    // })

                    // users.data.map(user=>{
                    //     if(user.email === email){
                    //         taken = true;
                    //     }
                    // })

                    // if(!taken){
                    //     let method = account.provider;
                    //     let res = await fetch('http://localhost:7000/users', {
                    //         method: 'POST',
                    //         headers: {'Content-Type': 'application/json'},
                    //         body: JSON.stringify({email, method}),
                    //     })
                    //     if(res.ok){
                    //         return user;
                    //     }
                    // }

                    // return user;
                } catch (error) {
                    console.log(error);
                    // return false;
                }
            }
            return user;
        },
        async redirect({url, baseUrl}) {
            return url.startsWith(baseUrl) ? url : baseUrl;
        }
    }
}
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};