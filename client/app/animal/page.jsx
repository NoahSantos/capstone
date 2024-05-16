"use client"

import {useEffect, useState} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import {findAnimal} from '../../server/fetch'

const AnimalPage = () => {
  const searchParams = useSearchParams()
  const ID = searchParams.get('id')
  let [animal, setAnimal] = useState({});

  console.log(ID);

  useEffect(() =>{
    const fetchAnimal = async () => {
      try {
        let result = await findAnimal(ID);
        setAnimal(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAnimal();
  }, [])

  console.log(animal);
  
  // const animal = data.find((animal) => animal.id == ID);

  return (
    <>
    <Header/>
    <section className='animal-box p-8 mb-8 mt-20'>
      <p className='text-6xl m-4 font-medium animal-header'>{animal.name}, Age {animal.age}</p>
      <div className='flex animal-info'>
        <Image
          src={animal.profile}
          width={500}
          height={500}
          alt={animal.name}

          className='m-4 object-cover w-[50rem]'
        />
        <article className='w-full p-4 text-xl leading-normal'>
          <p>Species: {animal.species === '0' ? 'Dog' : 'Cat'}</p>
          <p>Breed: {animal.breed}</p>
          <p>Gender: {animal.gender}</p><br/>
          <p>Spade: <span className='capitalize'>{animal.spade}</span></p><br/>

          <p>Description: {animal.desc}</p><br/>

          <p>Needs: {animal.needs === '' ? 'There are no special needs for this animal' : animal.needs}</p><br/>

          <p>Vaccines: {animal.vaccination}</p><br/>
          
          {checkAvailability(animal.status)}
        </article>

      </div>
    </section>
    <Footer/>
    </>
  )
}

const checkAvailability = (animal) => {
  if(animal === 0 || animal === 2) {
    return <button type="button" class="focus:outline-none text-white bg-orange-500 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 dark:bg-orange-500 dark:hover:bg-orange-700 "><span className='animate-pulse'>Schedule a meeting!</span></button>
  } else {
    return <button type="button" class="focus:outline-none cursor-default text-neutral-400 bg-neutral-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2"><span>Meeting Unvailable</span></button>
  }
}

export default AnimalPage