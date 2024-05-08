const User = require('@/server/models/user');
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
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
            // console.log(user);
            // console.log(account);

            if(account.provider === 'google'){
                try {
                    let {email} = user;
                    let taken = false;
                    let users = await fetch('http://localhost:7000/users').then(response =>{
                        return response.json();
                    })

                    console.log(users)

                    users.data.map(user=>{
                        if(user.email === email){
                            taken = true;
                        }
                    })

                    if(!taken){
                        let method = account.provider;
                        let res = await fetch('http://localhost:7000/users', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({email, method}),
                        })
                        if(res.ok){
                            return user;
                        }
                    }

                    console.log('login successful')
                    return user;
                } catch (error) {
                    console.log(error);
                    // return false;
                }
            }
            return user;
        },
        async redirect({url, baseUrl}) {
            console.log('url', url);
            console.log('baseUrl', baseUrl);
            
            return url.startsWith(baseUrl) ? url : baseUrl + '/protected/client';
        }
    }
}
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};