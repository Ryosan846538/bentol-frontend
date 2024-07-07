import React from 'react';
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import karaage1 from '../assets/karaage1.jpg';
import karaageBento from '../assets/karaage_bento.jpg';
import {
  Wrap
} from "@yamada-ui/react"

const Menu: React.FC = () => {
  // const { id } = useParams<{ id: string }>;
  return (
    <div className="min-h-screen bg-neutral-100">
      <Wrap>
        <Link to="/booking">
          <MenuCard
            imageUrl={karaageBento}
            title="にんにく唐揚げ弁当"
            description="唐揚げ日本一のにんにく唐揚げ弁当です。ニンニクの匂いがよく効いています"
            price={600}
          ></MenuCard>
        </Link>
        <Link to="/booking">
          <MenuCard
            imageUrl={karaage1}
            title="にんにく唐揚げ単品"
            description="ニンニクの匂いがよく効いています"
            price={500}
          ></MenuCard>
        </Link>
      </Wrap>
    </div>
  );
};
export default Menu;
