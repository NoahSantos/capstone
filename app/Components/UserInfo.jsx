'use client';

import SignInBtn from './SignInBtn';
import {useSession} from 'next-auth/react'
import Image from 'next/image'

export default function UserInfo(){
    const {status, data:session} = useSession();

    if(status === 'authenticated'){
        return (
            <div className='shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200'>
                <Image width={60} height={60} src={session?.user?.image} className='rounded-full' alt='img'></Image>
                <div className='font-bold'>Name: <span>{session?.user?.name}</span></div>
                <div className='font-bold'>Email: <span>{session?.user?.email}</span></div>
            </div>
        )
    }else{
        return (
            <SignInBtn></SignInBtn>
        )
    }
}