import data from '../animals/MOCK_DATA';
import Image from 'next/image'
import Link from 'next/link'

const AnimalCard = ({status, gender, profile, name, age, species, breed}) => {
  return (
    <div className="animals-card-container flex flex-wrap justify-around">
      <div className="animals-card flex flex-col rounded">
        <div className={`animals-card-${status}`}/>
        <p className="animals-card-gender">{gender}</p>
        <Image
          src={profile}
          width={400}
          height={300}
          alt={name}

          className='animals-card-image rounded-t'
        />
        <div
        className='m-0 text-center animals-card-description rounded-b'>
          <h1 className='text-black text-2xl my-2 mx-4'>{name} : {age}</h1>
          <h1 className='text-black text-base mb-3 mx-4'>{species}, {breed}</h1>
        </div>
      </div>
    </div>
  )
}

export default AnimalCard