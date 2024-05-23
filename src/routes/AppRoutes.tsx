import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Menu from '../pages/Menu';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/home" />
      <Route path="/menu" element={<Menu />} />
      <Route path="/mypage" />
    </Routes>
  );
};

export default AppRoutes;
