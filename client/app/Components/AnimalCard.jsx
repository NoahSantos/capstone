import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import {getAnimals} from '../../server/fetch';
// import Card from './Card';

const AnimalCard = ({speciesSort, otherSort}) => {
  const [animals, setAnimals] = useState([]);
  let titles = [
    [], [], [], ['Male', 'Female'], ['Neutered', 'Unneutered'], ['Available', 'Booked', 'Unavailable']
  ]

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

  const Card = ({ item, id }) => {
    return (
      <Link key={id} href={{
      pathname: '/animal',
      query: { id: item.id },
      }}>
        <div key={id} className="animals-card flex flex-col rounded">
          {`${item.status}` === '0' ? (
            <div className="animals-card-green" />
          ) : `${item.status}` === '1' ? (
            <div className="animals-card-red" />
          ) : (
            <div className="animals-card-yellow" />
          )}
          <p className="animals-card-gender">{item.gender}</p>
          <Image
          src={item.profile}
          width={400}
          height={300}
          alt={item.name}
          className="animals-card-image rounded-t"
          />
          <div className="m-0 text-center animals-card-description rounded-b">
            <h1 className="text-black text-2xl my-2 mx-4">{item.name} : {item.age}</h1>
            <h1 className="text-black text-base mb-3 mx-4">
                {`${item.species}` === '0' ? 'Dog' : 'Cat'}, {item.breed}
            </h1>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="animals-card-container flex flex-wrap flex-col justify-around">
      
      {speciesSort == 0 ?
        <>
          <p className='text-white text-5xl mx-6 mt-4 font-semibold'>Animals</p> <hr className="w-auto h-1 mb-2 mt-4 bg-white border-0" />

          <div className='flex flex-row flex-wrap justify-around'>
            {animals.map((item, id) => {
              return (
                <Card item={item} id={id} key={id}/>
              )
            })}
          </div>
        </>
      : speciesSort == 1 ?
        <>
          <p className='text-white text-5xl mx-6 mt-4 font-semibold'>Dogs</p> <hr className="w-auto h-1 mb-2 mt-4 bg-white border-0" />

          <div className='flex flex-row flex-wrap justify-around'>
            {animals.map((item, id) => {
              if(item.species === 0){
                return <Card item={item} id={id} key={id}/>
              }
            })}
          </div>
        </>
      :
        <>
          <p className='text-white text-5xl mx-6 mt-4 font-semibold'>Cats</p> <hr className="w-auto h-1 mb-2 mt-4 bg-white border-0" />

          <div className='flex flex-row flex-wrap justify-around'>
            {animals.map((item, id) => {
              if(item.species === 1){
                return <Card item={item} id={id} key={id}/>
              }
            })}
          </div>
        </>
      }
    </div>
  )
}

export default AnimalCard