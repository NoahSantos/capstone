'use server';
import { cookies } from 'next/headers';

export async function authenticated() {
    let session = cookies().get('session');
    if(session){
        return true;
    }else{
        return false;
    }
}

export async function logout(){
    cookies().delete('session');
}