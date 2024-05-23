import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  // Button,
  VStack,
  Heading,
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
    <Card direction={{ base: 'row', md: 'column' }} overflow="hidden" variant="outline">
      <Image src={imageUrl} objectFit="cover" maxW={{ base: '30%', md: '100%' }} />
      <VStack gap="0">
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>

        <CardBody>
          <Text>{description}</Text>
        </CardBody>

        <CardFooter>
          {/*  <Button colorScheme="primary" /* onClick={() => window.open(buttonUrl, '_blank')} */}
          {/*    カゴに入れる*/}
          {/*  </Button>*/}
          <Text fontSize="3xl" as="b">
            {price}円
          </Text>
        </CardFooter>
      </VStack>
    </Card>
  );
};

export default MenuCard;
