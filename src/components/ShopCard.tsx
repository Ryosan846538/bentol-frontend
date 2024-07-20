import React from 'react';
import { Box, Card, CardHeader, CardBody, Text } from '@yamada-ui/react';
import { Link } from 'react-router-dom';

interface ShopCardProps {
  id: number;
  name: string;
}

const ShopCard: React.FC<ShopCardProps> = ({ id, name }) => {
  return (
    <div className="p-2">
      <Card minW="sm" maxW="md" h="full">
        <div className="rounded-md bg-orange-400 shadow-md">
          <CardHeader>
            <Box as="b" fontSize="2xl" p="sm" rounded="md" bg="orange.500" color="white">
              {name}
            </Box>
          </CardHeader>

          <CardBody>
            <Link to={`/Menu/${id}`}>
              <Text align="center" as="i" fontSize="xl" color="black">
                メニューを見る
              </Text>
            </Link>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default ShopCard;
