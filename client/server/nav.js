'use server';
import { cookies } from 'next/headers';

export async function authenticated() {
    if(cookies()){
        return false;
    }
    let session = cookies().get('session');
    if(session.value !== ""){
        return 'exists';
    }else{
        return false;
    }
}

export async function logout(){
    cookies().delete('session');
    return false;
}