"use client"

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Image from 'next/image'
import data from '../animals/MOCK_DATA'
import { useSearchParams } from 'next/navigation'

const AnimalPage = () => {
  const searchParams = useSearchParams()
  const ID = searchParams.get('id')

  const animal = data.find((animal) => animal.id == ID)

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
          <p>Species: {animal.species}</p>
          <p>Breed: {animal.breed}</p>
          <p>Gender: {animal.gender}</p><br/>
          <p>Spade: <span className='capitalize'>{(animal.spade).toString()}</span></p><br/>

          <p>Description: {animal.desc}</p><br/>

          <p>Needs: There are no special needs for this animal.</p><br/>

          <p>Vaccines: {animal.vaccination}</p><br/>
          
          <button type="button" class="focus:outline-none text-white bg-orange-500 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 dark:bg-orange-500 dark:hover:bg-orange-700">Schedule a meeting!</button>
        </article>

      </div>
    </section>
    <Footer/>
    </>
  )
}

export default AnimalPage