import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import {getAnimals} from '../../server/fetch';
import Card from './Card';

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

  return (
    <div className="animals-card-container flex flex-wrap flex-col justify-around">
      
      {speciesSort == 0 ?
        <>
          <p className='text-white text-5xl mx-6 mt-4 font-semibold'>Animals</p> <hr className="w-auto h-1 mb-2 mt-4 bg-white border-0" />

          <div className='flex flex-row flex-wrap justify-around'>
            {animals.map((item, id) => {
              return (
                <Card item={item} id={id} />
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
                return <Card item={item} id={id} />
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
                return <Card item={item} id={id} />
              }
            })}
          </div>
        </>
      }
    </div>
  )
}

export default AnimalCard