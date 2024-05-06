import Header from '../Components/Header'
import AnimalCard from './card'

const Animals = () => {
  return (
    <>
      <p className='text-white text-5xl mx-6 mt-4 font-semibold'>Animals</p>
      <form className='p-4 animals-sort'>
        <input type="text" className='mx-4 p-2 text-lg' placeholder='Search by Name...'/>
        <select className='mx-4 p-2 text-lg'>
          <option disabled>- Select Gender -</option>
          <option>Any</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select className='mx-4 p-2 text-lg'>
          <option disabled>- Sort by -</option>
          <option>Any</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </form>
      <AnimalCard/>
    </>
  )
}

export default Animals