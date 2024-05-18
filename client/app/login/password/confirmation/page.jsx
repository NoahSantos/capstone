import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PasswordConfirmation = () => {
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
        <p className="text-4xl px-2 text-white">Confirmation</p>
      </section>

      <section className="px-8 py-4 login-body rounded-b-lg">
        <p className='text-center m-8 text-2xl leading-relaxed'>An message containing a link to reset your password has been sent to your email. The link will be valid for the next 2 hours. If you can't find the email, check your spam.</p>

        {/* Submit and other links */}
        <div className="flex flex-col w-full items-center">
          <Link href='/login' className="login-button mb-4 text-center">Back to Login</Link>
          {/* <button type="submit" className="login-button mb-4">Back to Login</button> */}
        </div>
      </section>
    </form>
    </div>
  )
}

export default PasswordConfirmation