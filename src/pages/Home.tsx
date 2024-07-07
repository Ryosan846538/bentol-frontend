import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Heading } from '@yamada-ui/react';
import ShopCard from '../components/ShopCard.tsx';
// import shop1 from '../assets/Shop1.jpeg';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Navigation from '../components/Navigation';
interface Store {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://133.14.14.14:8080/store');
        console.log(response.data.stores);
        setStores(response.data.stores);
      } catch (error) {
        console.error('Error fetching shops', error);
      }
    };
    fetchStores();
  }, []);

  return (
    <div>
      <Heading className="ml-16" as="h2" size="lg" isTruncated>
        お店一覧
      </Heading>
      <div className="bg-neutral-100 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* {shops.map((shop) => (
          <Link to={`/Menu/${id}`} key={shop.id}>
            <ShopCard imageUrl={shop.imageUrl} title={shop.title} description={shop.description} />
          </Link>
        ))} */}
          {stores.map((store) => (
            <ShopCard key={store.id} id={store.id} name={store.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
