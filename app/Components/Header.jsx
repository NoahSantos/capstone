import Image from 'next/image';
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='spacer-block'></div>

    <section className="header-section">
        <main className="header-container">
            <div className='header-part'>
                <Image src={"/vet-paw.png"} alt='Vet Science paw print logo.' width={500} height={500} className='vet-paw-logo'/>
                <Link href="/" className='home-link'>Veterinary Science</Link>
            </div>

            <div className='header-part'>
                <Link href="/">Home</Link>
                <Link href="/animals">Animals</Link>
                <Link href="/login">Login</Link>
            </div>
        </main>
        <div class="triangle-right"></div>
    </section>
    </>
    
  )
}

export default Header