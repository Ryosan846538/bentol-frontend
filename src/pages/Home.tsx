import React from 'react';
import ShopCard from '../components/ShopCard.tsx';
import shop1 from '../assets/Shop1.jpeg';
import { Link } from "react-router-dom";
import {
  Wrap
} from '@yamada-ui/react'
// import Header from '../components/Header';
// import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  return (
    
    <div className="min-h-screen bg-neutral-100">
      <Wrap>
        <Link to="/Menu">
          <ShopCard
            imageUrl={shop1}
            title="唐揚げ弁当"
            description="タレが選べる唐揚げ弁当販売中!!お昼ご飯にいかがですか?"
          ></ShopCard>   
        </Link>
      </Wrap> 
    </div>
  );
};
export default Home;
