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

interface MenuCardProps {
  ID: number;
  Name: string;
  Description: string;
  Price: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ Name, Description, Price }) => {
  return (
    <div className="p-2">
      <div className="rounded-md bg-white shadow-md">
        <Card minW="sm" maxW="md" h="full">
          <CardHeader>
            {/* <Image src={imageUrl} w="full" rounded="md" /> */}
            <Box as="b" fontSize="2xl" p="sm" rounded="md" bg="emerald.500" color="white">
              {Name}
            </Box>
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
        </Card>
      </div>
    </div>
  );
};

export default MenuCard;
