'use client';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AnimalCard from '../Components/AnimalCard';
import {useState} from 'react';

const Animals = () => {
  const [species, setSpecies] = useState(0)
  const [sort, setSort] = useState(0)

  return (
    <>
    <Header/>
      <form className='p-4 animals-sort'>
        {/* <input type="text" className='mx-4 p-4 text-xl rounded-full w-1/3' placeholder='Search by Name...'/> */}
        <select className='mx-4 p-4 text-xl rounded-md w-1/5' onChange={(e)=>setSpecies(e.target.value)}>
          <option disabled>- Select Species -</option>
          <option value={0}>Any</option>
          <option value={1}>Dog</option>
          <option value={2}>Cat</option>
        </select>
        <select className='mx-4 p-4 text-xl rounded-md w-1/5' onChange={(e)=>setSort(e.target.value)}>
          <option disabled>- Sort by -</option>
          <option value={0}>Any</option>
          <option value={1}>Age</option>
          <option value={2}>Breed</option>
          <option value={3}>Gender</option>
          <option value={4}>Neutered</option>
          <option value={5}>Availability</option>
        </select>
      </form>
      {/* <p className='text-white text-5xl mx-6 mt-4 font-semibold'>Animals</p> */}
      <AnimalCard speciesSort={species} otherSort={sort}></AnimalCard>
      <Footer/>
    </>
  )
}

export default Animals