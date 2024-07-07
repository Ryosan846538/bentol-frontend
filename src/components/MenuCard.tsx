import React from 'react';
import {
  Box,
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
      <div className="rounded-md bg-white shadow-md">
        <Card w="md" h="xl">
          <CardHeader>
            <Image 
              src={imageUrl}
              w="full"
              rounded="md" 
            />
          </CardHeader>

          <CardBody>
            <Box as="b" fontSize="2xl" p="sm" rounded="md" bg="emerald.500" color="white">
              {title}
            </Box>
            <Text
              align="center"
              as="i"
              fontSize="xl"
              color="black"
              lineClamp={3}
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
        </Card>
      </div>
    </div>
  );
};

export default MenuCard;
