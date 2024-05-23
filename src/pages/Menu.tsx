import React from 'react';
// import { useParams } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import karaage1 from '../assets/karaage1.jpg';
import karaageBento from '../assets/karaage_bento.jpg';

const Menu: React.FC = () => {
  // const { id } = useParams<{ id: string }>;
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MenuCard
          imageUrl={karaageBento}
          title="にんにく唐揚げ弁当"
          description="唐揚げ日本一のにんにく唐揚げ弁当です。ニンニクの匂いがよく効いています"
          price={600}
        ></MenuCard>
        <MenuCard
          imageUrl={karaage1}
          title="にんにく唐揚げ単品"
          description="ニンニクの匂いがよく効いています"
          price={500}
        ></MenuCard>
      </div>
    </div>
  );
};
export default Menu;
