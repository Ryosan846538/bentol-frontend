import OrderInfo from '../components/OrderInfo.tsx';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Tabs,
  Tab,
  TabPanel,
  VStack,
} from '@yamada-ui/react';

interface MyPageCardProps {
  imageUrl: string;
  title: string;
  waiting: string;
  num: string;
  time: string;
}

const MyPageCard: React.FC<MyPageCardProps> = ({ imageUrl, title, waiting, num, time }) => {
  return (
    <div>
      <Card minW="sm" maxW="md" h="full" variant="solid" colorScheme="emerald">
        <div className="p-2">
          <Tabs variant="rounded-subtle" colorScheme="gray">
            <Tab>品物</Tab>
            <Tab>注文情報</Tab>

            <TabPanel>
              <CardHeader justifyContent="center">
                <Image src={imageUrl} w="full" rounded="md" />
              </CardHeader>

              <CardBody>
                <Heading size="md" color="white">
                  {title}
                </Heading>
              </CardBody>
            </TabPanel>
            <TabPanel>
              <CardBody>
                <VStack>
                  <OrderInfo title="お客様番号" description={waiting} />
                  <OrderInfo title="予約時間" description={time} />
                  <OrderInfo title="予約個数" description={num} />
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
