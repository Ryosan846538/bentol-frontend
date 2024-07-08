import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { VStack, Text, Input, Button, Heading } from '@yamada-ui/react';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // バックエンドにPOSTリクエストを送る(先ほどgit cloneして、サーバーを立ち上げたもののURL)
    axios
      .post('http://133.14.14.14:8080/login', {
        name: name,
        password: password,
      })
      .then((response) => {
        // ここでユーザー情報をローカルストレージに保存します
        localStorage.setItem('user_id', response.data.user_id);
        alert('ログイン成功！');
        navigate('/Home');
      })
      .catch((error) => {
        console.error(error);
        setError('ログインに失敗しました。');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100">
      <div className="w-full max-w-lg p-12 space-y-8 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit}>
          <VStack align="center">
            <Heading size="lg">ログイン</Heading>
            <div className="w-full">
              <Text fontSize="lg">メールアドレス</Text>
              <Input
                variant="filled"
                placeholder="your-address@example.com"
                value={name}
                size="lg"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Text fontSize="lg">パスワード</Text>
              <Input
                type="password"
                variant="filled"
                placeholder="password"
                value={password}
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-lg">{error}</p>}
            <Button colorScheme="emerald" type="submit" size="lg" width="full">
              ログイン
            </Button>
            <div className="text-center w-full">
              <span className="text-gray-600 text-lg">アカウントをお持ちでない方</span>
              <button
                className="text-emerald-500 hover:text-emerald-600 font-semibold ml-2 text-lg"
                type="button"
                onClick={() => {
                  navigate('/Signup');
                }}
              >
                新規登録
              </button>
            </div>
            <div className="text-center w-full">
              <span className="text-gray-600 text-lg">店舗の方は</span>
              <button
                className="text-emerald-500 hover:text-emerald-600 font-semibold ml-2 text-lg"
                type="button"
                onClick={() => {
                  navigate('/store/login');
                }}
              >
                こちら
              </button>
            </div>
          </VStack>
        </form>
      </div>
    </div>
  );
};

export default Login;
