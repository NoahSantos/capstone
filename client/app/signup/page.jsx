'use client';

import React, {useRef, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SignInBtn from '../Components/SignInBtn';
import {signUp} from '../../server/authenticate';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { redirect } from 'next/navigation';

const Signup = () => {
  let email = useRef(null);
  let password = useRef(null);
  let password2 = useRef(null);
  const [success, setSuccess] = useState({status: 'waiting', data: ''});
  const [open, setOpen] = useState(true);

  return (
    <div className="flex justify-center login-background items-center">
      <div className="alertCont">
        {success.status === 'fail' ? 
          <Collapse in={open}>
            <Alert
              variant="filled"
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {success.data}
            </Alert>
          </Collapse>
        : 
          <Collapse in={open}>
            <Alert
              variant="filled"
              severity="info"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Please enter your information into the fields
            </Alert>
          </Collapse>
        }
      </div>
      {/* Login Box */}
      <form className="login-container rounded-lg p-4" action={async()=>{
        let info = await signUp(email.current.value, password.current.value, password2.current.value);
        if(info.status === 'log'){
          redirect('/')
        }else if(info.status){
          redirect('/login');
        }else{
          setSuccess({status: 'fail', data: info.data});
        }
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