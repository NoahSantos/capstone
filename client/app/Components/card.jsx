import data from '../animals/MOCK_DATA';
import Image from 'next/image'
import Link from 'next/link'

const AnimalCard = () => {
  return (
    <div className="animals-card-container flex flex-wrap justify-around">
      <div className="animals-card flex flex-col rounded">
        <div className={`animals-card-${item.status}`}/>
        <p className="animals-card-gender">{item.gender[0]}</p>
        <Image
          src={item.profile}
          width={400}
          height={300}
          alt={item.name}

          className='animals-card-image rounded-t'
        />
        <div
        className='m-0 text-center animals-card-description rounded-b'>
          <h1 className='text-black text-2xl my-2 mx-4'>{item.name} : {item.age}</h1>
          <h1 className='text-black text-base mb-3 mx-4'>{item.species}, {item.breed}</h1>
        </div>
      </div>
    </div>
  )
}

export default AnimalCard