import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  // Button,
  Text,
  // Image,
} from '@yamada-ui/react';

interface MenuCardProps {
  ID: number;
  Name: string;
  Description: string;
  Price: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ Name, Description, Price }) => {
  return (
    <div className="p-2">
      <Card minW="sm" maxW="md" h="full">
        <div className="rounded-md bg-emerald-400 shadow-md">
          <CardHeader>
            {/* <Image src={imageUrl} w="full" rounded="md" /> */}
            <Text as="b" fontSize="2xl" color="black">
              {Name}
            </Text>
          </CardHeader>

          <CardBody>
            <Text align="center" as="i" fontSize="xl" color="black">
              {Description}
            </Text>
          </CardBody>

          <CardFooter>
            {/*  <Button colorScheme="primary" /* onClick={() => window.open(buttonUrl, '_blank')} */}
            {/*    カゴに入れる*/}
            {/*  </Button>*/}
            <Text fontSize="3xl" as="b">
              {Price}円
            </Text>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default MenuCard;
