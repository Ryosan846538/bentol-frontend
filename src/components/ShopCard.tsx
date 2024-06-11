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

interface ShopCardProps{
    imageUrl: string;
    title: string;
    description: string;
}

const ShopCard: React.FC<ShopCardProps> = ({ imageUrl, title, description }) => {
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
        </CardFooter>
      </VStack>
    </Card>
  )
}

export default ShopCard
