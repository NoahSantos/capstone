import Header from './Components/Header'
import Footer from './Components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header/>
    <section>
        <section className='home-page-main'>
          <Image src={'/vet-drop.png'} alt='Vet logo in the shape of a drop' width={500} height={500} className='vet-drop-icon'/>
        </section>

        <section className='home-page-about'>
          <Image src={'/home-about-img.jfif'} alt='Vet student helping dog' width={500} height={500} className='home-about-image'/>
          <div className='home-about-text'>
            <h1 className='home-about-title'>About Us</h1>
            <p>This two-year Veterinary Science program trains students in animal care, surgeries, and lab work. It supports high schoolers with IEP/504 plans and offers dual enrollment for college credits. Graduates earn certifications like NAVTA Veterinary Assistant and OSHA 10, setting the path for veterinary careers.</p>
          </div>
        </section>

        <section className='home-events'>
          <h1 className='home-events-title'>Events</h1>
          <div className='home-events-box'>
            <div className='home-events-text'>
              <h2 className='home-events-text-title'>Graduation</h2>
              <p>This two-year Veterinary Science program trains students in animal care, surgeries, and lab work. It supports high schoolers with IEP/504 plans and offers dual enrollment for college credits. Graduates earn certifications like NAVTA Veterinary Assistant and OSHA 10, setting the path for veterinary careers.</p>
            </div>
            {/* <div className='home-image-container home-image-right'/> */}
            <div className='home-events-image-container'>
              <Image src={'/graduation.jfif'} alt='Graduation events image' width={500} height={500} className='home-events-images home-image-right'/> 
            </div>
          </div>

          <div className='home-events-box'>
            <div className='home-events-text'>
              <h2 className='home-events-text-title'>Graduation</h2>
              <p>This two-year Veterinary Science program trains students in animal care, surgeries, and lab work. It supports high schoolers with IEP/504 plans and offers dual enrollment for college credits. Graduates earn certifications like NAVTA Veterinary Assistant and OSHA 10, setting the path for veterinary careers.</p>
            </div>
            {/* <div className='home-image-container home-image-right'/> */}
            <div className='home-events-image-container'>
              <Image src={'/graduation.jfif'} alt='Graduation events image' width={500} height={500} className='home-events-images home-image-right'/> 
            </div>
          </div>

          <div className='home-events-box'>
            <div className='home-events-text'>
              <h2 className='home-events-text-title'>Graduation</h2>
              <p>This two-year Veterinary Science program trains students in animal care, surgeries, and lab work. It supports high schoolers with IEP/504 plans and offers dual enrollment for college credits. Graduates earn certifications like NAVTA Veterinary Assistant and OSHA 10, setting the path for veterinary careers.</p>
            </div>
            {/* <div className='home-image-container home-image-right'/> */}
            <div className='home-events-image-container'>
              <Image src={'/graduation.jfif'} alt='Graduation events image' width={500} height={500} className='home-events-images home-image-right'/> 
            </div>
          </div>

          <div className='home-events-box'>
            <div className='home-events-text'>
              <h2 className='home-events-text-title'>Graduation</h2>
              <p>This two-year Veterinary Science program trains students in animal care, surgeries, and lab work. It supports high schoolers with IEP/504 plans and offers dual enrollment for college credits. Graduates earn certifications like NAVTA Veterinary Assistant and OSHA 10, setting the path for veterinary careers.</p>
            </div>
            {/* <div className='home-image-container home-image-right'/> */}
            <div className='home-events-image-container'>
              <Image src={'/graduation.jfif'} alt='Graduation events image' width={500} height={500} className='home-events-images home-image-right'/> 
            </div>
          </div>
        </section>
    </section>
      <Footer/>
    </>
  );
}
