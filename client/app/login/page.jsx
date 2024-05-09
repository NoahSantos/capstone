'use client';

import React, {useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import SignInBtn from '../Components/SignInBtn';
import {login} from '../Components/authenticate';

const Login = () => {
  let email = useRef(null);
  let password = useRef(null);

  return (
    <div className="flex justify-center login-background items-center">
    {/* Login Box */}
    <form className="login-container rounded-lg p-4" action={()=>login(email.current.value, password.current.value)}>
      {/* Logo and header */}
      <section className="flex items-center login-header p-4 rounded-t-lg">
        <Link href="/" className='m-0'>
        <Image
          src="https://cdn.pixabay.com/photo/2017/08/12/23/29/background-texture-2635740_640.jpg"
          width={300}
          height={300}
          alt="Paw Logo"

          className="size-16 mx-4 login-header-img"
        />
        </Link>
        <p className="text-4xl px-2 text-white">Login</p>
      </section>

      {/* Login inputs */}
      <section className="px-8 py-6 login-body rounded-b-lg">
        {/* Email */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email-enter" className="m-2 text-2xl">Email:</label>
          <input type="email" name="email-enter" className="h-12 px-4 text-xl login-input" placeholder="Enter Email..." ref={email}/>
        </div>

        {/* Password */}
        <div className="flex flex-col mb-4">
          <label htmlFor="password-enter" className="m-2 text-2xl">Password:</label>
          <input type="password" name="password-enter" className="h-12 px-4 text-xl login-input" placeholder="Enter Password..." ref={password}/>
        </div>

        {/* Submit and other links */}
        <div className="flex flex-col w-full items-center">
          <button type="submit" className="login-button mb-4">Login</button>
          <Link href="/signup" className="text-gray-400 gray-link mb-2">Don&#39;t have an account yet? Sign up here!</Link>
          <Link href="/password" className="text-gray-400 gray-link">Forgot Password?</Link>
        </div>

        {/* Google Auth */}
        <div className="flex items-center my-4">
          <div className="login-line"/>
          <p className="login-line-text">Or</p>
          <div className="login-line"/>
        </div>

        {/* <button type="submit" className="h-16 p-4 mb-2 bg-sky-600">Login with Google</button> */}
        <div className='google-btn'>
          <SignInBtn></SignInBtn>
        </div>
      </section>
    </form>
    </div>
  )
}

export default Login