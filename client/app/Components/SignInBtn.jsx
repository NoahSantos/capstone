'use client'

import Image from 'next/image';
import google from '../../public/google-logo.png';
import {signIn} from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function SignInBtn(){
    return (
        <button onClick={async(e)=>{
            e.preventDefault();
            await signIn('google', { callbackUrl: '/' });
        }} className='flex items-center gap-4 shadow-xl rounded-lg pl-3'>
            <Image src={google} height={30} width={30} alt='google logo'></Image>
            <span className='bg-blue-500 txt-white px-4 py-3'>Sign in with Google</span>
        </button>
    )
}