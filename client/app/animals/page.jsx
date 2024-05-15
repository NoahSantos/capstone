'use client';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AnimalCard from '../Components/card';

const Animals = () => {
  return (
    <>
    <Header/>
      <form className='p-4 animals-sort'>
        <input type="text" className='mx-4 p-4 text-xl rounded-full w-1/3' placeholder='Search by Name...'/>
        <select className='mx-4 p-4 text-xl rounded-md w-1/5'>
          <option disabled>- Select Species -</option>
          <option value={0}>Any</option>
          <option value={1}>Cat</option>
          <option value={2}>Dog</option>
        </select>
        <select className='mx-4 p-4 text-xl rounded-md w-1/5'>
          <option disabled>- Sort by -</option>
          <option value={0}>Any</option>
          <option value={1}>Age</option>
          <option value={2}>Breed</option>
          <option value={3}>Type</option>
          <option value={4}>Availability</option>
        </select>
      </form>
      <p className='text-white text-5xl mx-6 mt-4 font-semibold'>Animals</p>
      <AnimalCard></AnimalCard>
      <Footer/>
    </>
  )
}

export default Animals