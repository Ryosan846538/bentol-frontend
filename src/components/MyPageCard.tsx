
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Tabs,
  Tab,
  TabPanel,
  Text,
  VStack,
} from '@yamada-ui/react';

interface MyPageCardProps {
  imageUrl: string;
  title: string;
  waiting: number;
  num: number;
  time: string;
}

const MyPageCard: React.FC<MyPageCardProps> = ({ imageUrl, title, waiting, num, time }) => {
  return (
    <div>
      <Card minW="sm" maxW="md" h="full">
        <div className="p-2 bg-white rounded-md shadow-md">
          <Tabs variant="rounded-subtle" colorScheme="gray">
            <Tab>品物</Tab>
            <Tab>注文情報</Tab>

            <TabPanel>
              <CardHeader justifyContent="center">
                <Image src={imageUrl} w="full" rounded="md" />
              </CardHeader>

              <CardBody>
                <Heading size="md" color="black">
                  {title}
                </Heading>
              </CardBody>
            </TabPanel>
            <TabPanel>
              <CardBody>
                <VStack>
                  <Text
                    as="b"
                    fontSize="2xl"
                    color="black"
                  >
                    お客様番号
                  </Text>
                  <Text
                    align="center"
                    as="b"
                    fontSize="xl"
                    color="black"
                  >
                    {waiting}
                  </Text>
                  <Text
                    as="b"
                    fontSize="2xl"
                    color="black"
                  >
                    予約時間
                  </Text>
                  <Text
                    align="center"
                    as="b"
                    fontSize="xl"
                    color="black"
                  >
                    {time}
                  </Text>
                  <Text
                    as="b"
                    fontSize="2xl"
                    color="black"
                  >
                    予約個数
                  </Text>
                  <Text
                    align="center"
                    as="b"
                    fontSize="xl"
                    color="black"
                  >
                    {num}
                  </Text>
                </VStack>
              </CardBody>
            </TabPanel>
          </Tabs>
        </div>
      </Card>
    </div>
  );
};

export default MyPageCard;
