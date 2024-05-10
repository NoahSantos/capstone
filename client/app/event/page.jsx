import React from 'react'
import Image from 'next/image'
import Header from '../Components/Header'
import Head from 'next/head'

const Event = () => {
  return (
    <>
        <Header/>
        <section className='event-section'>
            <h1 className='event-title'>Graduation</h1>
            <div className='event-info'>
                <Image src={'/grad.jpg'} alt='Gradution Photo' height={500} width={500} className='event-image'/>
                <div className='event-text'> 
                    <p className='event-date'>Date: August 7th, 2024</p>
                    <p>This two-year Veterinary Science program trains students in animal care, surgeries, and lab work. It supports high schoolers with IEP/504 plans and offers dual enrollment for college credits. Graduates earn certifications like NAVTA Veterinary Assistant and OSHA 10, setting the path for veterinary careers.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Event