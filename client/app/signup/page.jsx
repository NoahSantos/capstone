'use client';

import React, {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SignInBtn from '../Components/SignInBtn';
import {signUp} from '../Components/authenticate';
import Alert from '@mui/material/Alert';

const Signup = () => {
  let email = useRef(null);
  let password = useRef(null);
  let password2 = useRef(null);
  const [success, setSuccess] = useState('waiting');

  return (
    <div className="flex justify-center login-background items-center">
      <div className="alertCont">
        {success === 'fail' ? 
          <Alert variant="filled" severity="error" onClose={() => {}}>
            {/* <AlertTitle>Error</AlertTitle> */}
            There was an issue with creating your account</Alert>
        : 
          <Alert variant="filled" severity="info" onClose={() => {}}>
            {/* <AlertTitle>Info</AlertTitle> */}
            Please enter your information into the fields</Alert> 
        }
      </div>
      {/* Login Box */}
      <form className="login-container rounded-lg p-4" action={async()=>{
        setSuccess(await signUp(email.current.value, password.current.value, password2.current.value));
      }}>
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
          <p className="text-4xl px-2 text-white">Sign Up</p>
        </section>

        {/* Login inputs */}
        <section className="px-8 py-4 login-body rounded-b-lg">
          {/* Email */}
          <div className="flex flex-col mb-4">
            <label htmlFor="email-enter" className="m-2 text-2xl login-label">Email:</label>
            <input type="email" name="email-enter" className="h-12 px-4 text-xl login-input" placeholder="Enter Email..." ref={email}/>
          </div>

          {/* Password */}
          <div className="flex flex-col mb-4">
            <label htmlFor="password-enter" className="m-2 text-2xl login-label">Password:</label>
            <input type="password" name="password-enter" className="h-12 px-4 text-xl login-input" placeholder="Create Password..." ref={password}/>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col mb-4">
            <label htmlFor="password-reenter" className="m-2 text-2xl login-label">Confirm Password:</label>
            <input type="password" name="password-reenter" className="h-12 px-4 text-xl login-input" placeholder="Re-Type Password..." ref={password2}/>
          </div>

          {/* Submit and other links */}
          <div className="flex flex-col w-full items-center">
            <button type="submit" className="login-button mb-4">Register</button>
            <Link href="/login" className="text-gray-400 gray-link">Already have an account? Log in here!</Link>
          </div>

          {/* Google Auth */}
          <div className="flex items-center my-4">
            <div className="login-line"/>
            <p className="login-line-text">Or</p>
            <div className="login-line"/>
          </div>

          {/* <button type="submit" className="h-16 p-4 mb-2 bg-sky-600">Sign up with Google</button> */}
          <div className='google-btn'>
            <SignInBtn></SignInBtn>
          </div>
        </section>
      </form>
    </div>
  )
}

export default Signup