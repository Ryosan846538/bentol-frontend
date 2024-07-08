import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Data {
  store_name: string;
  email: string;
  password: string;
}

const StoreSignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Data> = async (data) => {
    try {
      const response = await axios.post('http://133.14.14.14:8090/store/register', {
        store_name: data.store_name,
        password: data.password,
        mail: data.email,
      });
      console.log(response.data);
      alert('アカウントが作成されました');
      navigate('/store/login');
    } catch (error) {
      setError('アカウントの作成に失敗しました');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg px-10 pt-8 pb-10 mb-4 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">新規登録</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="store_name">
              店の名前
            </label>
            <input
              className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.store_name ? 'border-red-500' : ''
              }`}
              id="store_name"
              type="text"
              placeholder="電大商店"
              {...register('store_name', {
                required: { value: true, message: '店の名前を入力してください' },
              })}
            />
            {errors.store_name && (
              <p className="text-red-500 text-sm mt-2">{errors.store_name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="email">
              メール
            </label>
            <input
              className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
              id="email"
              type="email"
              placeholder="your-address@example.com"
              {...register('email', {
                required: { value: true, message: 'メールアドレスを入力してください' },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="password">
              パスワード
            </label>
            <input
              className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
              id="password"
              type="password"
              placeholder="パスワード"
              {...register('password', {
                required: { value: true, message: 'パスワードを入力してください' },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex flex-col space-y-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out w-full text-center"
              type="submit"
            >
              新規登録
            </button>
            <div className="text-center">
              <span className="text-gray-600">すでにアカウントをお持ちですか？</span>
              <button
                className="text-blue-500 hover:text-blue-600 font-semibold ml-2"
                type="button"
                onClick={() => {
                  navigate('/store/login');
                }}
              >
                ログイン
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StoreSignUpForm;
