import data from '../MOCK_DATA';
import Link from 'next/link';
import Image from 'next/image';

const Events = () => {
  return (
    <section className='home-events'>
        {data.map((item) => (
        <>
          <div
            style={{backgroundImage: `url('${item.image}')`}}
            className='w-full bg-fixed bg-center bg-no-repeat bg-cover h-[95vh] snap-center'
          />
          <div className='text-center max-w-[70rem] m-12'>
            <h1 className='text-6xl font-normal text-white leading-relaxed sm:text-4xl sm:leading-loose'>{item.title}</h1>
            <p className='text-4xl leading-relaxed text-white font-light sm:text-xl sm:leading-loose  border-t-amber-500 border-t-4'>{item.description}</p>

            <button type="button" className="focus:outline-none text-white bg-orange-500 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-xl px-5 py-2.5 dark:bg-orange-500 dark:hover:bg-orange-700 mt-12"><Link href={{
              pathname: '/event',
              query: { id: item.id },
            }} className='text'>See this event!</Link></button>

            
          </div>
        </>
        ))}
    </section>
  )
}

export default Events