import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AnimalCard from './card'

const Animals = () => {
  return (
    <>
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
      <AnimalCard/>
      <Footer/>
    </>
  )
}

export default Animals