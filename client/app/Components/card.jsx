import data from '../animals/MOCK_DATA';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import {getAnimals} from '../../server/fetch';

const AnimalCard = () => {
  const [animals, setAnimals] = useState([]);

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
    <div className="animals-card-container flex flex-wrap justify-around">
      
      {animals.map((item) => (
        <Link href={{
          pathname: '/animal',
          query: { id: item.id },
        }}>
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
            <h1 className='text-black text-base mb-3 mx-4'>{item.species}, Asian Semi-Longhair</h1>
          </div>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default AnimalCard