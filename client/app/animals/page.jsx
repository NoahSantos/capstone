'use client';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AnimalCard from '../Components/card';
import { useEffect, useState } from 'react';
import {getAnimals} from '../../server/animals';

const Animals = () => {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        let animalList = await getAnimals();
        setAnimals(animalList);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchAnimals();
  }, []);

  return (
    <>
    <Header/>
      <form className='p-4 animals-sort'>
        <input type="text" className='mx-4 p-4 text-xl rounded-full w-1/3' placeholder='Search by Name...'/>
        <select className='mx-4 p-4 text-xl rounded-md w-1/5'>
          <option disabled>- Select Gender -</option>
          <option>Any</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select className='mx-4 p-4 text-xl rounded-md w-1/5'>
          <option disabled>- Sort by -</option>
          <option>Age</option>
          <option>Breed</option>
          <option>Type</option>
          <option>Availability</option>
        </select>
      </form>
      <p className='text-white text-5xl mx-6 mt-4 font-semibold'>Animals</p>
      {animals.map(animal=>{
        <AnimalCard status={animal.status} gender={animal.gender} profile={animal.profile} name={animal.name} age={animal.age} species={animal.species} breed={animal.breed}/>
      })}
      <Footer/>
    </>
  )
}

export default Animals