'use client'

import {useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {resetPassword} from '../../../../server/reset'

const PasswordReset = () => {
  let token = useRef(null);
  let email = useRef(null);
  let pass1 = useRef(null);
  let pass2 = useRef(null);

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
        <p className="text-4xl px-2 text-white">Reset Password</p>
      </section>

      {/* Login inputs */}
      <section className="px-8 py-4 login-body rounded-b-lg">
        {/* Email */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email-enter" className="m-2 text-2xl login-label">Email:</label>
          <input type="email" name="email-enter" className="h-12 px-4 text-xl login-input" placeholder="Enter Email..."  ref={email}/>
        </div>

        {/* Token */}
        <div className="flex flex-col mb-4">
          <label htmlFor="token-enter" className="m-2 text-2xl login-label">Token:</label>
          <input type="password" name="token-enter" className="h-12 px-4 text-xl login-input" placeholder="Enter Token..." ref={token}/>
        </div>

        {/* Password */}
        <div className="flex flex-col mb-4">
          <label htmlFor="password-enter" className="m-2 text-2xl login-label">Password:</label>
          <input type="password" name="password-enter" className="h-12 px-4 text-xl login-input" placeholder="Create Password..." ref={pass1}/>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col mb-4">
          <label htmlFor="password-reenter" className="m-2 text-2xl login-label">Confirm Password:</label>
          <input type="password" name="password-reenter" className="h-12 px-4 text-xl login-input" placeholder="Re-Type Password..." ref={pass2}/>
        </div>

        {/* Submit and other links */}
        <div className="flex flex-col w-full items-center">
          <button type="button" className="login-button mb-4" onClick={async()=>{
            let data = await resetPassword(token.current.value, email.current.value, pass1.current.value, pass2.current.value)
            if(data === 'success') {
              console.log('login')
              window.location.href = 'http://localhost:3000/login';
            }else if(data === 'expired'){
              window.location.href = 'http://localhost:3000/login/password/expired';
            }
          }}>Reset</button>
        </div>
      </section>
    </form>
    </div>
  )
}

export default PasswordReset