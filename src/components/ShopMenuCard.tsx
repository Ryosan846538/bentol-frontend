import React from 'react';
import {
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
        <Card key={cardkey} minW="sm" maxW="md" h="full" variant="solid" colorScheme="emerald">
          <div className="p-2">
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
                <Heading
                 size="md"
                 color="white"
                >{title}</Heading>
              </CardBody>
            </TabPanel>
            <TabPanel>
              <CardBody>
                <Text
                 align="center"
                 as="b"
                 fontSize="2xl"
                 color="white"
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
