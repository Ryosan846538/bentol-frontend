import React from 'react';
import { Link } from 'react-router-dom';
import {
  Text,
  VStack
} from "@yamada-ui/react"

const Header: React.FC = () => {
  return (
    <header className="bg-white text-emerald-500 p-4 flex justify-between items-center shadow-md">
      <Link to="/Home" className="text-2xl font-bold">
        <VStack>
          <Text
            as="b"
            fontSize="2xl"
          >
            ベントル
          </Text>
          <Text
            as="sub"
          >
            お弁当予約サービス
          </Text>
        </VStack>
      </Link>
      <nav>
        <ul className="flex">
          <li className="ml-6">
            <Link
              to="/Home"
              className="text-emerald-500 transition-colors duration-300 hover:text-yellow-500"
            >
              <Text>
                ホーム
              </Text>
            </Link>
          </li>
          <li className="ml-6">
            <Link
              to="/Menu"
              className="text-emerald-500 transition-colors duration-300 hover:text-yellow-500"
            >
              <Text>
                メニュー
              </Text>
            </Link>
          </li>
          <li className="ml-6">
            <Link
              to="/mypage"
              className="text-emerald-500 transition-colors duration-300 hover:text-yellow-500"
            >
              <Text>
                マイページ
              </Text>
            </Link>
          </li>
          <li className="ml-6">
            <Link
              to="/"
              className="text-emerald-500 transition-colors duration-300 hover:text-yellow-500"
            >
              <Text>
                ログイン
              </Text>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
