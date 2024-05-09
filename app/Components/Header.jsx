import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='sticky top-0 left-0 w-[90%] mt-7 -mb-7 h-0 z-50'>
      <div className='flex'>
      <nav className='p-4 text-3xl text-white flex items-center justify-between w-full rounded-sm bg-[#F57F20]'>
        <Link href="/" className='flex'>
          <Image
            src="/vet-paw.png"
            width={40}
            height={40}
            alt='Paw Logo'
          />
          <p className='px-4'>Veternary Science</p>
        </Link>

        <div className='mx-4 text-[1.5rem] font-light'>
          <Link href='/' className='px-6'>Home</Link>
          <Link href='/animals' className='px-6'>Animals</Link>
          <Link href='/login' className='pl-6'>Login</Link>
        </div>
      </nav>
      <div className='w-0 h-0 relative -left-[1px] triangle-nav
      border-t-[2.5rem] border-t-transparent
      border-l-[2.5rem] border-l-[#F57F20]
      border-b-[2.5rem] border-b-transparent'/>
      </div>
    </header>
  )
}

export default Header