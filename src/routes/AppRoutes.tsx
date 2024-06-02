import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Menu from '../pages/Menu';
import Booking from '../pages/Booking.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/home" />
      <Route path="/menu" element={<Menu />} />
      <Route path="/mypage" />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
};

export default AppRoutes;
