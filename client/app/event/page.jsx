"use client"

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Image from 'next/image'
import data from '../MOCK_DATA'
import { useSearchParams } from 'next/navigation'

const Event = () => {
  const searchParams = useSearchParams()
  const ID = searchParams.get('id')

  const event = data.find((event) => event.id == ID)

  return (
    <>
        <Header/>
        <section className='event-section'>
            <h1 className='event-title'>{event.title}</h1>
            <div className='event-info'>
                <Image src={event.image} alt='Gradution Photo' height={500} width={500} className='event-image'/>
                <div className='event-text'> 
                    <p className='event-date'>Date: {event.date}</p>
                    <p className='event-date'>Location: {event.location}</p>
                    <p>{event.description}</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Event