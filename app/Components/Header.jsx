"use client";
import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react';

const Header = () => {
  let nav = useRef(null)
  const [screenWidth, setScreenWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  function swapMenu(){
    if(!isMenuOpen){
      nav.current.style.transform = 'translateX(0vw)';
    }else{
      nav.current.style.transform = 'translateX(-39.6vw)';
    }
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {screenWidth > 719 ? (
          <>
            <div className="headerCont">

              <div className='spacer-block'></div>
              <section className="header-section">
                  <main className="header-container">
                      <div className='header-part'>
                          <Link  href="/"><Image src={"/vet-paw.png"} alt='Vet Science paw print logo.' width={500} height={500} className='vet-paw-logo'/></Link>
                          <Link href="/" className='home-link header-link'>Veterinary Science</Link>
                      </div>

                      <div className='header-part'>
                          <Link href="/" className='header-link'>Home</Link>
                          <Link href="/animals" className='header-link'>Animals</Link>
                          <Link href="/login" className='header-link'>Login</Link>
                      </div>
                  </main>
                  <div className="triangle-right"></div>
              </section>
            </div>
          </>
        ) : (
          <>
            <section className='mobile-header-section' ref={nav}>
              <div className='spacer-block'></div>
              <section className="header-section">
                  <div className="triangle-right" onClick={() => swapMenu()}></div>
              </section>
              <div className="header-menu">
                <Link className={'mobile-header-image'} href={'/'}><Image src={"/vet-paw.png"} alt='Vet Science paw print logo.' width={500} height={500} className='vet-paw-logo'/></Link>
                <Link className={"mobile-header-link"} href={'/'}>Veterinary Science</Link>
                <Link className={"mobile-header-link"} href="/">Home</Link>
                <Link className={"mobile-header-link"} href="/animals">Animals</Link>
                <Link className={"mobile-header-link"} href="/login">Login</Link>
              </div>
            </section>
          </>
        )}
    </>
    
  )
}

export default Header