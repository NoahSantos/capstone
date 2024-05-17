'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useState} from 'react'
import {getEvents} from '../../server/fetch';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let eventList = await getEvents();
        setEvents(eventList);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchEvents();
  }, []);

  return (
    <section className='home-events'>
        {events.map((item) => (
        <>
          <div
            style={{backgroundImage: `url('${item.image}')`}}
            className='w-full bg-fixed bg-center bg-no-repeat bg-cover h-[95vh] snap-center'
          />
          <div className='text-center max-w-[70rem] m-12'>
            <h1 className='text-6xl font-normal text-white leading-relaxed sm:text-4xl sm:leading-loose'>{item.title}</h1>
            <p className='text-4xl leading-relaxed text-white font-light sm:text-xl sm:leading-loose  border-t-amber-500 border-t-4'>{item.description}</p>

            <button type="button" className="focus:outline-none text-white bg-orange-500 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-xl px-5 py-2.5 dark:bg-orange-500 dark:hover:bg-orange-700 mt-12"><Link href={{
              pathname: '/event',
              query: { id: item.id },
            }} className='text'>See this event!</Link></button>

            
          </div>
        </>
        ))}
    </section>
  )
}

export default Events