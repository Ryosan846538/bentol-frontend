import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  // Button,
  Text,
  // Image,
} from '@yamada-ui/react';

import { Link } from 'react-router-dom';

interface MenuCardProps {
  ID: number;
  Name: string;
  Description: string;
  Price: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ Name, Description, Price }) => {
  return (
    <div className="p-2">
      {/* <div className="rounded-md bg-white shadow-md"> */}
      <Card minW="sm" maxW="md" h="full" bgGradient="linear(to-br,orange.100,orange.500)">
        <CardHeader>
          {/* <Image src={imageUrl} w="full" rounded="md" /> */}
          <Box as="b" fontSize="2xl" p="sm" rounded="md" color="white">
            {Name}
          </Box>
        </CardHeader>

        <CardBody>
          <Text align="center" as="i" fontSize="xl" color="black">
            {Description}
          </Text>
        </CardBody>

        <CardFooter className="flex justify-between items-center">
          <Text fontSize="3xl" as="b">
            {Price}円
          </Text>
          <Link
            to="/booking"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            予約する
          </Link>
        </CardFooter>
      </Card>
    </div>
    // </div>
  );
};

export default MenuCard;
