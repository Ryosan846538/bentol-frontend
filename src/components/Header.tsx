import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/Home" className="text-2xl font-bold">
        ベントル
      </Link>
      <nav>
        <ul className="flex">
          <li className="ml-6">
            <Link
              to="/Home"
              className="text-white transition-colors duration-300 hover:text-yellow-500"
            >
              ホーム
            </Link>
          </li>
          <li className="ml-6">
            <Link
              to="/Menu"
              className="text-white transition-colors duration-300 hover:text-yellow-500"
            >
              メニュー
            </Link>
          </li>
          <li className="ml-6">
            <Link
              to="/mypage"
              className="text-white transition-colors duration-300 hover:text-yellow-500"
            >
              マイページ
            </Link>
          </li>
          <li className="ml-6">
            <Link
              to="/"
              className="text-white transition-colors duration-300 hover:text-yellow-500"
            >
              ログイン
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
