import Header from '../Components/Header'
import AnimalCard from './card'

const Animals = () => {
  return (
    <>
      <Header/>
      <form>
        <input type="text"/>
        <select>
          <option className='text-gray-600'>- Select Gender -</option>
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