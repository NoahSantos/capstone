import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

const Footer = () => {
  return (
    <section className='footer-section'>
        <div className='footer-div1'>
            <h2 className='footer-title'>West-MEC</h2>
            <h4 className='footer-subtitle'>Veterinary Science</h4>
        </div>

        <div className='footer-div2'>

            <div className='footer-about'>
                <h4 className='footer-alt-title'>About West-MEC (NEC)</h4>
                <div className='footer-container'>
                    <h4>Contact Us</h4>
                    <h4>West-MEC Website</h4>
                </div>
                <div  className='footer-container'>
                    <h4>1617 W. Williams Drive</h4>
                    <h4>Phoenix, AZ 85027</h4>
                </div>
            </div>

            <div className='footer-pages'>
                <h4  className='footer-alt-title footer-pages-title'>Pages</h4>
                <div className='footer-links footer-container'>
                    <Link href="/">Home</Link>
                    <Link href="/animals">Animals</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/signup">Sign Up</Link>
                </div>
            </div>
        </div>

        <div className='footer-div3'>
            <Image src={"/vet-drop.png"} alt='Logo in the shape of a drop.' width={500} height={500} className='vet-drop-logo'/>
        </div>
    </section>
  )
}

export default Footer