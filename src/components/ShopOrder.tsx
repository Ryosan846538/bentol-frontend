import ShopMenuCard from '../components/ShopMenuCard';
import bento1 from '../assets/karaage_bento.jpg';
import ShopBar from '../components/ShopBar';
import { Box, HStack, Text, VStack } from '@yamada-ui/react';


interface ShopOrderProps {
  time: string;
  num: number;
}

const ShopOrder: React.FC<ShopOrderProps> = ({ time, num }) => {

  return (
    <div>
      <VStack>
        <ShopBar time={time} />
        <div className="p-2">
          <div className="box-border h-6 w-10 p-1 bg-gray-400 rounded-full">
            <Text lineClamp={1}>
              {num}
            </Text>
          </div>
        </div>
        <Box overflowX="scroll">
          <HStack>
            <ShopMenuCard
              imageUrl={bento1}
              title="にんにく唐揚げ弁当"
              waiting={1}
            />
          </HStack>
        </Box>
      </VStack>
    </div>
  );
};

export default ShopOrder;
