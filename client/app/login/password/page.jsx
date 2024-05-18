'use client';

import {useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {sendResetPasswordEmail} from '../../../server/reset'

const PasswordRecovery = () => {
  let email = useRef(null);

  return (
    <div className="flex justify-center login-background items-center">
    {/* Login Box */}
    <form className="login-container rounded-lg p-4">
      {/* Logo and header */}
      <section className="flex items-center login-header p-4 rounded-t-lg">
        <Image
          src="https://cdn.pixabay.com/photo/2017/08/12/23/29/background-texture-2635740_640.jpg"
          width={300}
          height={300}
          alt="Paw Logo"

          className="size-16 mx-4"
        />
        <p className="text-4xl px-2 text-white">Recovery</p>
      </section>

      {/* Login inputs */}
      <section className="px-8 py-4 login-body rounded-b-lg">
        {/* Email */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email-enter" className="m-2 text-2xl login-label">Email:</label>
          <input type="email" name="email-enter" className="h-12 px-4 text-xl login-input" placeholder="Enter Email..." ref={email}/>
        </div>

        {/* Submit and other links */}
        <div className="flex flex-col w-full items-center">
          <button type="button" className="login-button mb-4" onClick={async()=>{
            let temp = await sendResetPasswordEmail(email.current.value)
            if(temp) window.location.href = 'http://localhost:3000/login/password/confirmation';
          }}>Send Email</button>
          <Link href="/login" className="text-gray-400 gray-link">Return to Login</Link>
        </div>
      </section>
    </form>
    </div>
  )
}

export default PasswordRecovery