import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Home from '../pages/Home';
import Booking from '../pages/Booking.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/mypage" />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
};

export default AppRoutes;
