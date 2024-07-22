import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
  Image,
  VStack,
  Container,
  Center,
} from '@yamada-ui/react';
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import paypay from '../assets/paypay.jpg';
import creditcard from '../assets/visa_mastercard.jpg';

const Booking: React.FC = () => {
  const { store_id, menu_id } = useParams<{ store_id: string; menu_id: string }>();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [payValue, setPayValue] = useState<string>('PayPay');
  const [selectedTime, setSelectedTime] = useState<string>('受け取る時間を選択してください');
  const [selectedQuantity, setSelectedQuantity] =
    useState<string>('購入する個数を選択してください');

  const handleSubmit = async () => {
    if (
      !selectedDate ||
      selectedTime === '受け取る時間を選択してください' ||
      selectedQuantity === '購入する個数を選択してください'
    ) {
      alert('全ての項目を選択してください。');
      return;
    }

    const paymentData = {
      user_id: 1, // このユーザーIDは適切な方法で取得する必要があります
      store_id: parseInt(store_id!),
      menue_id: parseInt(menu_id!),
      time: selectedTime,
      date: selectedDate.toISOString().split('T')[0],
      count: parseInt(selectedQuantity),
    };

    try {
      const response = await axios.post('http://133.14.14.14:8090/payment', paymentData);
      console.log(paymentData);
      const paymentUrl = response.data.payment_url;
      window.location.href = paymentUrl;
    } catch (error) {
      console.error('Payment request failed:', error);
      console.log(paymentData);
      alert('支払い処理中にエラーが発生しました。');
    }
  };

  return (
    <Container maxW="container.md" centerContent>
      <VStack align="stretch" width="100%">
        <Center>
          <Text fontSize="2xl" as="h1">
            予約
          </Text>
        </Center>

        <DatePicker onChange={(date) => setSelectedDate(date || null)} />

        <Text fontSize="2xl" as="h2">
          時間
        </Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<FontAwesomeIcon size="xs" icon={faChevronDown} />}>
            {selectedTime}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setSelectedTime('12:00')}>12:00</MenuItem>
            <MenuItem onClick={() => setSelectedTime('12:30')}>12:30</MenuItem>
            <MenuItem onClick={() => setSelectedTime('13:00')}>13:00</MenuItem>
          </MenuList>
        </Menu>

        <Text fontSize="2xl" as="h2">
          個数
        </Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<FontAwesomeIcon size="xs" icon={faChevronDown} />}>
            {selectedQuantity}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setSelectedQuantity('1')}>1</MenuItem>
            <MenuItem onClick={() => setSelectedQuantity('2')}>2</MenuItem>
            <MenuItem onClick={() => setSelectedQuantity('3')}>3</MenuItem>
            <MenuItem onClick={() => setSelectedQuantity('4')}>4</MenuItem>
          </MenuList>
        </Menu>

        <Text fontSize="2xl" as="h2">
          支払い方法
        </Text>
        <RadioGroup value={payValue} onChange={(value) => setPayValue(value)}>
          <VStack align="stretch">
            <Card variant="outline">
              <CardHeader>
                <Radio value="PayPay" size="lg">
                  PayPay
                </Radio>
              </CardHeader>
              <CardBody>
                <Image src={paypay} size="sm" objectFit="contain" />
              </CardBody>
            </Card>
            <Card variant="outline">
              <CardHeader>
                <Radio value="creditCard" size="lg">
                  VISA・MasterCard
                </Radio>
              </CardHeader>
              <CardBody>
                <Image src={creditcard} size="sm" objectFit="contain" />
              </CardBody>
            </Card>
          </VStack>
        </RadioGroup>

        <Button colorScheme="blue" onClick={handleSubmit}>
          予約を確定する
        </Button>
      </VStack>
    </Container>
  );
};

export default Booking;
