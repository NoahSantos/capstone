import Image from 'next/image';
import Link from 'next/link';

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

export default Card;
