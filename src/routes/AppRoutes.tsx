import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Signup from '../pages/SignUpForm';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import MyPage from '../pages/MyPage.tsx';
import Booking from '../pages/Booking.tsx';
import ShopHome from '../pages/ShopHome.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/shophome" element={<ShopHome />} />
    </Routes>
  );
};

export default AppRoutes;
