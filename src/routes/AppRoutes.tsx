import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Signup from '../pages/SignUpForm';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import MyPage from '../pages/MyPage.tsx';
import Booking from '../pages/Booking.tsx';
import ShopHome from '../pages/ShopHome.tsx';
import StoreSignUp from '../pages/StoreSignUpForm.tsx';
import StoreLogin from '../pages/StoreLogin.tsx';
import Redirect from '../pages/Redirect.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu/:id" element={<Menu />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/booking/:store_id/:menu_id" element={<Booking />} />
      <Route path="/shophome" element={<ShopHome />} />
      <Route path="/store/signup" element={<StoreSignUp />} />
      <Route path="/store/login" element={<StoreLogin />} />
      <Route path="/purchased" element={<Redirect />} />
    </Routes>
  );
};

export default AppRoutes;
