import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  // Button,
  Text,
  Image,
} from '@yamada-ui/react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const MenuCard: React.FC<CardProps> = ({ imageUrl, title, description, price }) => {
  return (
    <div className="p-2">
      <Card minW="sm" maxW="md" h="full">
        <div className="rounded-md bg-emerald-400 shadow-md">
        <CardHeader>
          <Image 
            src={imageUrl}
            w="full"
            rounded="md" 
          />
        </CardHeader>

        <CardBody>
          <Text
            as="b"
            fontSize="2xl"
            color="black"
          >{title}</Text>
          <Text
            align="center"
            as="i"
            fontSize="xl"
            color="black"
          >
            {description}
          </Text>
        </CardBody>

        <CardFooter>
          {/*  <Button colorScheme="primary" /* onClick={() => window.open(buttonUrl, '_blank')} */}
          {/*    カゴに入れる*/}
          {/*  </Button>*/}
          <Text fontSize="3xl" as="b">
            {price}円
          </Text>
        </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default MenuCard;
