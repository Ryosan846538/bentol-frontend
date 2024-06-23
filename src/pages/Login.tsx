import React from 'react';
import { Link } from "react-router-dom";
import {
    Text,
    Button,
    VStack,
    Input
  } from '@yamada-ui/react';

const Login: React.FC = () => {
  return (
    <div className="bg-neutral-100">
      <div className="relative inset-0">
        <div className="absolute inset-x-1/4 inset-y-1/4 ">
          {/* <form action={login}> */}
          <VStack align="center">
            <div className="container mx-auto">
              <Text >
                ユーザーネーム
              </Text>
              <Input variant="filled" placeholder="name" />
            </div>
            <div className="container mx-auto">
              <Text>
                パスワード
                </Text>
              <Input variant="filled" placeholder="pass" />
            </div>
            <Link to="/Home">
              <Button colorScheme="emerald">
                <button type="submit">ログイン</button>
              </Button>
            </Link>
            </VStack>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};
export default Login;
