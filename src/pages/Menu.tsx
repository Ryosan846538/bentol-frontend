import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heading } from '@yamada-ui/react';
// import { useParams } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
// import karaage1 from '../assets/karaage1.jpg';
// import karaageBento from '../assets/karaage_bento.jpg';
import axios from 'axios';
// import { set } from 'react-hook-form';

interface ApiMenu {
  ID: number;
  StoreID: number;
  Name: string;
  Price: number;
  Description: string;
  CreatedAt: string;
  UpdatedAt: string;
}

interface Menu {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiStore {
  ID: number;
  Name: string;
  CreatedAt: string;
  UpdatedAt: string;
}

interface Store {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  menues: ApiMenu[];
  store: ApiStore;
}

const Menu: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<Store | null>(null); // nullを許容する
  const [menues, setMenues] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get<ApiResponse>(`http://133.14.14.14:8090/store/${id}`);
        const fetchedStore: Store = {
          id: response.data.store.ID,
          name: response.data.store.Name,
          createdAt: response.data.store.CreatedAt,
          updatedAt: response.data.store.UpdatedAt,
        };
        const fetchedMenues: Menu[] = response.data.menues.map((menu) => ({
          id: menu.ID,
          name: menu.Name,
          price: menu.Price,
          description: menu.Description,
          createdAt: menu.CreatedAt,
          updatedAt: menu.UpdatedAt,
        }));
        setStore(fetchedStore);
        setMenues(fetchedMenues);
      } catch (error) {
        console.error('Error fetching store', error);
      }
    };
    fetchStoreData();
  }, [id]);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Heading className="ml-16" as="h2" size="lg" isTruncated>
        {store?.name}
      </Heading>
      <div className="bg-neutral-100 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/booking" />
          {menues.map((menu) => (
            <MenuCard
              key={menu.id}
              ID={menu.id}
              Name={menu.name}
              Price={menu.price}
              Description={menu.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Menu;
