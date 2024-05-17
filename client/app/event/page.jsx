"use client"

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Image from 'next/image'
// import data from '../MOCK_DATA'
import { useSearchParams } from 'next/navigation'
import {useEffect, useState} from 'react'
import {findEvent} from '../../server/fetch';

const Event = () => {
  const searchParams = useSearchParams()
  const ID = searchParams.get('id')
  let [event, setEvent] = useState({});

  console.log(ID);

  useEffect(() =>{
    const fetchEvent = async () => {
      try {
        let result = await findEvent(ID);
        setEvent(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvent();
  }, [])

  return (
    <>
    <Header/>
    <section className='animal-box p-8 mb-8 mt-20'>
      <p className='text-6xl m-4 font-medium animal-header'>{event.title}</p>
      <div className='flex animal-info'>
        <Image
          src={event.image}
          width={500}
          height={500}
          alt={event.title}

          className='m-4 object-cover w-[50rem]'
        />
        <article className='w-full p-4 text-xl leading-normal'>
          <p>Location: {event.location}</p>
          <p>Date: {event.date}</p><br/>
          <p>Time: {event.time}</p><br/>
          <p>Description: {event.description}</p><br/>
        </article>

      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Event