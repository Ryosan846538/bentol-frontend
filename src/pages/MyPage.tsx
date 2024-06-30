import ShopBar from '../components/ShopBar.tsx';
import MyPageCard from '../components/MyPageCard.tsx';
import MenuCard from '../components/MenuCard.tsx';
import karaageBento from '../assets/karaage_bento.jpg';
import { HStack, VStack } from '@yamada-ui/react';

const MyPage = () => {
  return (
    <div className="bg-neutral-100">
      <VStack>
        <ShopBar time="注文状況" />
        <div className="p-2">
          <MyPageCard
            imageUrl={karaageBento}
            title="にんにく唐揚げ弁当"
            waiting="1"
            num="1"
            time="2024/1/1 00:00"
          />
        </div>
        <ShopBar time="履歴" />
        <HStack>
          <MenuCard
            imageUrl={karaageBento}
            title="にんにく唐揚げ弁当"
            description="唐揚げ日本一のにんにく唐揚げ弁当です。ニンニクの匂いがよく効いています"
            price={600}
          />
          <MenuCard
            imageUrl={karaageBento}
            title="にんにく唐揚げ弁当"
            description="唐揚げ日本一のにんにく唐揚げ弁当です。ニンニクの匂いがよく効いています"
            price={600}
          />
          <MenuCard
            imageUrl={karaageBento}
            title="にんにく唐揚げ弁当"
            description="唐揚げ日本一のにんにく唐揚げ弁当です。ニンニクの匂いがよく効いています"
            price={600}
          />
        </HStack>
      </VStack>
    </div>
  );
};

export default MyPage;
