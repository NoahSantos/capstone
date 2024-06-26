'use server';
import { cookies } from 'next/headers';

export async function authenticated() {
    let session = cookies().get('session');
    if(!cookies() || !session){
        return false;
    }
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