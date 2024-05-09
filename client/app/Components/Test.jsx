'use client'

import Link from 'next/link'
import {useSession, signIn, signOut} from 'next-auth/react';

export default function Test() {
    const {status} = useSession();
    return (
        <div className='p-4 flex justify-between items-center shadow-md'>
            <Link href='/test' className='font-bold text-lg text-blue-700'>Oauth</Link>
            {status === 'authenticated' ? 
                <button onClick={()=>signOut()} className='bg-slate-900 text-white px-6 py-2 rounded-md'>Sign Out</button> 
                : 
                <button onClick={()=>signIn('google')} className='bg-slate-900 text-white px-6 py-2 rounded-md'>Sign In</button>}
        </div>
    )
}
