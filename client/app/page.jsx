import Header from './Components/Header'
import Footer from './Components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Events from './Components/Events'

export default function Home() {
  return (
    <>
      <Header/>
    <section>
        <section className='home-page-main'/>

        <section className='home-page-about snap-start'>
          <div className='text-center max-w-[70rem]'>
            <h1 className='text-6xl font-normal text-white leading-relaxed sm:text-4xl sm:leading-loose'>About Us</h1>
            <p className='text-4xl leading-relaxed text-white font-light sm:text-xl sm:leading-loose'>This two-year Veterinary Science program trains students in animal care, surgeries, and lab work. It supports high schoolers with IEP/504 plans and offers dual enrollment for college credits. Graduates earn certifications like NAVTA Veterinary Assistant and OSHA 10, setting the path for veterinary careers.</p>
          </div>
        </section>

        <section className='home-events'>
          <Events/>
          {/* <div className='home-events-box'>
            <div className='home-events-text'>
              <h2 className='home-events-text-title'>Graduation</h2>
              <p className='event-paragraph'>This two-year Veterinary Science program trains students in animal care, surgeries, and lab work. It supports high schoolers with IEP/504 plans and offers dual enrollment for college credits. Graduates earn certifications like NAVTA Veterinary Assistant and OSHA 10, setting the path for veterinary careers.</p>
              <Link href="/event" className='event-link'>See this event!</Link>
            </div>
            <div className='home-events-image-container'>
              <Image src={'/graduation.jfif'} alt='Graduation events image' width={500} height={500} className='home-events-images home-image-right'/> 
            </div>
          </div> */}
        </section>
    </section>
      <Footer/>
    </>
  );
}
