import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Tabs,
  Tab,
  TabPanel,
  Text
} from '@yamada-ui/react';

interface ShopMenuCardProps{
    cardkey: number;
    imageUrl: string;
    title: string;
    waiting: string;
}

const ShopMenuCard: React.FC<ShopMenuCardProps> = ({ cardkey, imageUrl, title, waiting }) => {
  return (
    <div className="p-2">
        <Card key={cardkey} minW="sm" maxW="md" h="full" bgGradient="linear(to-br,orange.100,orange.500)">
          <div className="p-2 rounded-md shadow-md">
          <Tabs variant="rounded-subtle" colorScheme="gray">
            <Tab>注文</Tab>
            <Tab>お客様番号</Tab>

            <TabPanel>
              <CardHeader justifyContent="center">
                <Image 
                  src={imageUrl}
                  w="full"
                  rounded="md"
                />
              </CardHeader>

              <CardBody>
                <Heading size="md">
                  <Box as="b" fontSize="2xl" p="sm" color="black">
                    {title}
                  </Box>
                </Heading>
              </CardBody>
            </TabPanel>
            <TabPanel>
              <CardBody>
                <Text
                 align="center"
                 as="b"
                 fontSize="2xl"
                 color="black"
                >{waiting}</Text>
              </CardBody>
            </TabPanel>
          </Tabs>
          </div>
        </Card>
        </div>
  )
}

export default ShopMenuCard
