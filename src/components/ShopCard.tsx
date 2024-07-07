import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
    <div className="p-2">
      <div className="rounded-md bg-white shadow-md">
        <Card w="md" h="lg">
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
                lineClamp={2}
              >
                {description}
              </Text>
            </CardBody>

            <CardFooter>
              {/*  <Button colorScheme="primary" /* onClick={() => window.open(buttonUrl, '_blank')} */}
              {/*    カゴに入れる*/}
              {/*  </Button>*/}
            </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default ShopCard
