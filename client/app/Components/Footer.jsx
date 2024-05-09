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
                        <h4 className='footer-info'>Contact Us</h4>
                        <h4 className='footer-info'>West-MEC Website</h4>
                    </div>
                    <div  className='footer-container'>
                        <h4 className='footer-info'>1617 W. Williams Drive</h4>
                        <h4 className='footer-info'>Phoenix, AZ 85027</h4>
                    </div>
                </div>

                <div className='footer-pages'>
                    <h4  className='footer-alt-title footer-pages-title'>Pages</h4>
                    <div className='footer-links footer-container'>
                        <Link href="/" className='footer-info'>Home</Link>
                        <Link href="/animals" className='footer-info'>Animals</Link>
                        <Link href="/login" className='footer-info'>Login</Link>
                        <Link href="/signup" className='footer-info'>Sign Up</Link>
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