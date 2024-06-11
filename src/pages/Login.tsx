import React from 'react';
import { Link } from "react-router-dom";
import {
    Text,
    Button,
    Input
  } from '@yamada-ui/react';

const Login: React.FC = () => {
  return (
    <div className="relative inset-0">
      <div className="absolute inset-x-1/4 inset-y-1/4 ">
        {/* <form action={login}> */}
        <div className="container mx-auto">
          <Text >
            ユーザーネーム
          </Text>
          <hr />
          <Input variant="filled" placeholder="name" />
        </div>
          <hr />
        <div className="container mx-auto">
            <Text>
              パスワード
            </Text>
            <hr />
            <Input variant="filled" placeholder="pass" />
        </div>
          <hr />
          <Link to="/Home">
            <Button colorScheme="green">
              <button type="submit">ログイン</button>
            </Button>
          </Link>
        {/* </form> */}
      </div>
    </div>
  );
};
export default Login;
