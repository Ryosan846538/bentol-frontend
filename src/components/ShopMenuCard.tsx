import React from 'react';
import {
  Box,
  Button,
  // Card,
  // CardHeader,
  // CardBody,
  Heading,
  Image,
  Tabs,
  Tab,
  TabPanel,
  Text,
  VStack
} from '@yamada-ui/react';

interface ShopMenuCardProps{
    imageUrl: string;
    title: string;
    waiting: number;
}

const ShopMenuCard: React.FC<ShopMenuCardProps> = ({ imageUrl, title, waiting }) => {
  return (
    <div className="p-2">
        <Box w="md" h="full">
          <div className="p-2 rounded-md bg-white shadow-md">
          <Tabs variant="rounded-subtle" colorScheme="gray">
            <Tab>注文</Tab>
            <Tab>お客様番号</Tab>

            <TabPanel>
              <VStack>
              <Box justifyContent="center">
                <Image 
                  src={imageUrl}
                  w="full"
                  rounded="md"
                />
              </Box>

              <Box>
                <Heading
                 size="md"
                 color="black"
                >{title}</Heading>
              </Box>
              </VStack>
            </TabPanel>
            <TabPanel>
              <Box>
                <Text
                 align="center"
                 as="b"
                 fontSize="2xl"
                 color="black"
                >{waiting}</Text>
              </Box>
            </TabPanel>
          </Tabs>
          <Button variant="solid" colorScheme="emerald">
              取引終了
          </Button>
          </div>
        </Box>
        </div>
  )
}

export default ShopMenuCard
