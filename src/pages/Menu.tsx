import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heading, Wrap } from '@yamada-ui/react';
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

interface ApiResponse {
  menues: ApiMenu[];
}

const Menu: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // useParamsを使用してURLからidを取得
  const [menues, setMenues] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get<ApiResponse>(`http://133.14.14.14:8090/store/${id}`);
        console.log('API response:', response.data); // レスポンスをログに出力

        if (!response.data.menues) {
          throw new Error('Menues not found in response');
        }

        const fetchedMenues: Menu[] = response.data.menues.map((menu) => ({
          id: menu.ID,
          name: menu.Name,
          price: menu.Price,
          description: menu.Description,
          createdAt: menu.CreatedAt,
          updatedAt: menu.UpdatedAt,
        }));

        // ID順にソート
        fetchedMenues.sort((a, b) => a.id - b.id);

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
        メニュー一覧
      </Heading>
      <div className="bg-neutral-100 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Wrap gap="md">
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
          </Wrap>
        </div>
      </div>
    </div>
  );
};
export default Menu;
