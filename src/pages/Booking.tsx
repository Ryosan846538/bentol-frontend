import React from 'react';
import { useState } from 'react';
import { DatePicker } from '@yamada-ui/calendar';
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Radio,
  RadioGroup,
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Image,
  VStack,
} from '@yamada-ui/react';
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import paypay from '../assets/paypay.jpg';
import creditcard from '../assets/visa_mastercard.jpg';
// import axios from 'axios';

const Booking: React.FC = () => {
  // const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  //
  // const handleDateChange = async (date: Date | null) => {
  //   setSelectedDate(date);
  //
  // };
  const [payValue, setPayValue] = useState<string>('PayPay');
  const [selectedTime, setSelectedTime] = useState<string>('受け取る時間を選択してください');
  const [selectedQuantity, setSelectedQuantity] =
    useState<string>('購入する個数を選択してください');
  return (
    // 要素を全体的に真ん中に配置
    <div className="bg-neutral-100">
      <div className=" px-4 md:px-8 lg:px-16">
        <Text fontSize="2xl" as="h1">
          予約
        </Text>
        <DatePicker 
          /* onChange={handleDateChange} */ 
          minDate={new Date(new Date())}
        />
        <Text fontSize="2xl" as="h1">
          時間
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            // colorSheme="emerald"
            rightIcon={<FontAwesomeIcon size="xs" icon={faChevronDown} />}
          >
            {selectedTime}
          </MenuButton>

          <MenuList>
            {/*<MenuItem>12:00</MenuItem>*/}
            {/*<MenuItem>12:30</MenuItem>*/}
            {/*<MenuItem>13:00</MenuItem>*/}
            <MenuItem onClick={() => setSelectedTime('12:00')}>12:00</MenuItem>
            <MenuItem onClick={() => setSelectedTime('12:30')}>12:30</MenuItem>
            <MenuItem onClick={() => setSelectedTime('13:00')}>13:00</MenuItem>
          </MenuList>
        </Menu>
        <Text fontSize="2xl" as="h1">
          個数
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            // colorSheme="emerald"
            rightIcon={<FontAwesomeIcon size="xs" icon={faChevronDown} />}
          >
            {selectedQuantity}
          </MenuButton>

          <MenuList>
            <MenuItem onClick={() => setSelectedQuantity('1')}>1</MenuItem>
            <MenuItem onClick={() => setSelectedQuantity('2')}>2</MenuItem>
            <MenuItem onClick={() => setSelectedQuantity('3')}>3</MenuItem>
            <MenuItem onClick={() => setSelectedQuantity('4')}>4</MenuItem>
          </MenuList>
        </Menu>
        <Text fontSize="2xl" as="h1">
          支払い方法
        </Text>
        <RadioGroup value={payValue} onChange={(value) => setPayValue(value)}>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <Card variant="outline" size="md">
              <VStack gap="0">
                <CardHeader>
                  <Radio value="PayPay" size="lg">
                    PayPay
                  </Radio>
                </CardHeader>
                <CardBody>
                  <Image src={paypay} size="sm" objectFit="contain" />
                </CardBody>
              </VStack>
            </Card>
            <Card variant="outline" size="md">
              <VStack gap="0">
                <CardHeader>
                  <Radio value="creditCard" size="lg">
                    VISA・MaterCard
                  </Radio>
                </CardHeader>
                <CardBody>
                  <Image src={creditcard} size="sm" objectFit="contain" />
                </CardBody>
              </VStack>
            </Card>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
export default Booking;
