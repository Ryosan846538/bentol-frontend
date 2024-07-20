import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface Data {
  store_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const StoreSignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Data>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // パスワード確認の表示/非表示を切り替える関数
  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!confirmShowPassword);
  };

  const onSubmit: SubmitHandler<Data> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError('パスワードが一致しません');
      return;
    }
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
              className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
              className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
            <div className="relative">
              <input
                className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="パスワード"
                {...register('password', {
                  required: { value: true, message: 'パスワードを入力してください' },
                })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-lg text-gray-700"
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-3"
              htmlFor="confirmPassword"
            >
              パスワード（確認）
            </label>
            <div className="relative">
              <input
                className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                id="confirmPassword"
                type={confirmShowPassword ? 'text' : 'password'}
                placeholder="パスワード（確認）"
                {...register('confirmPassword', {
                  required: { value: true, message: 'パスワード（確認）を入力してください' },
                  validate: (value) => value === watch('password') || 'パスワードが一致しません',
                })}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-3 text-lg text-gray-700"
              >
                {confirmShowPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">{errors.confirmPassword.message}</p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex flex-col space-y-4">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out w-full text-center"
              type="submit"
            >
              新規登録
            </button>
            <div className="text-center">
              <span className="text-gray-600">すでにアカウントをお持ちですか？</span>
              <button
                className="text-orange-500 hover:text-orange-600 font-semibold ml-2"
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
