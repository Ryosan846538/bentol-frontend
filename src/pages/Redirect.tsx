import React from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center">
          <svg
            className="w-24 h-24 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4 -4" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2a10 10 0 100 20a10 10 0 000-20z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mt-4">
          購入が完了しました
        </h2>
        <p className="text-center text-gray-600 mt-2">またのご利用をお待ちしております。</p>
        <div className="mt-6 flex justify-center">
          <button
            className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-200"
            onClick={() => navigate('/Home')} // ステップ3
          >
            ホームに戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
