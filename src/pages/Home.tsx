import React from 'react';
import ShopCard from '../components/ShopCard.tsx';
import shop1 from '../assets/Shop1.jpeg';
import { Link } from "react-router-dom";
// import Header from '../components/Header';
// import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  return (
    
    <div className="bg-neutral-100 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/Menu">
        <ShopCard
          imageUrl={shop1}
          title="唐揚げ弁当"
          description="タレが選べる唐揚げ弁当販売中!!お昼ご飯にいかがですか?"
        ></ShopCard>   
        </Link>  
      </div>
    </div>
  );
};
export default Home;
