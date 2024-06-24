import React from 'react'
import { useState } from 'react'
import ShopMenuCard from '../components/ShopMenuCard.tsx';
import bento1 from '../assets/karaage_bento.jpg';
import ShopBar from '../components/ShopBar.tsx' ;
import {
  InfiniteScrollArea,
  Loading,
  Text,
  VStack
} from "@yamada-ui/react" ;

interface ShopOrderProps{
    time: string;
    num: string;
}

const ShopOrder: React.FC<ShopOrderProps> = ({ time, num }) => {
  const [count, setCount] = useState<number>(50)

  return (
    <div>
      <VStack>
        <ShopBar 
        time ={time} />
        <div className="p-2">
          <div className="box-border h-6 w-10 p-1 bg-gray-400 rounded-full">
            <Text lineClamp={1}>
              {num}
            </Text>
          </div>
        </div>
        <InfiniteScrollArea 
          orientation="horizontal"
          h="full"
          onLoad={({ index,finish }) => {

            setCount((prev) => prev + 50)
          
            if(index >= 5)finish()
          }}
        loading={<Loading size="2xl" />}
        >
          {Array(count)
            .fill(0)
            .map((_, index) => (
              <ShopMenuCard
                cardkey={index}
                imageUrl={bento1}
                title="にんにく唐揚げ弁当"
                waiting="1"
              /> 
          ))}
        </InfiniteScrollArea>
      </VStack>
    </div>
  )
}

export default ShopOrder
