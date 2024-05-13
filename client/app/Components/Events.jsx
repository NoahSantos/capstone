import data from '../MOCK_DATA';
import Link from 'next/link';
import Image from 'next/image';

const Events = () => {
  return (
    <section className='home-events'>
        {data.map((item) => (
        <div className='home-events-box'>
            <div className='home-events-text'>
              <h2 className='home-events-text-title'>{item.title}</h2>
              <p className='event-paragraph'>{item.description}</p>
              <Link href={{
          pathname: '/event',
          query: { id: item.id },
        }} className='event-link'>See this event!</Link>
            </div>
            <div className='home-events-image-container'>
              <Image src={item.image} alt='Graduation events image' width={500} height={500} className='home-events-images home-image-right'/> 
            </div>
        </div>
        ))}
    </section>
  )
}

export default Events