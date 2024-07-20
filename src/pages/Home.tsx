import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Heading } from '@yamada-ui/react';
import ShopCard from '../components/ShopCard.tsx';
// import shop1 from '../assets/Shop1.jpeg';
// import { Link, Wrap } from 'react-router-dom';
// import Header from '../components/Header';
// import Navigation from '../components/Navigation';

interface ApiStore {
  ID: number;
  Name: string;
  CreatedAt: string;
  UpdatedAt: string;
}

interface Store {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ stores: ApiStore[] }>('http://133.14.14.14:8090/store');
        const fetchedStores = response.data.stores.map((store) => ({
          id: store.ID,
          name: store.Name,
        }));
        console.log(fetchedStores);
        setStores(fetchedStores);
      } catch (error) {
        console.error('Error fetching shops', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Heading className="ml-16" as="h2" size="lg" isTruncated>
        お店一覧
      </Heading>
      <div className="bg-neutral-100 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <Wrap gap="md">
          {shops.map((shop) => (
            <Link to={`/Menu/${id}`} key={shop.id}>
              <ShopCard imageUrl={shop.imageUrl} title={shop.title} description={shop.description} />
            </Link>
          ))} 
          </Wrap> */}
          {stores.map((store) => (
            <ShopCard key={store.id} id={store.id} name={store.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
