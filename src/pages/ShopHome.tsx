// import { useState } from 'react'
// import ShopMenuCard from '../components/ShopMenuCard.tsx';
import ShopOrder from '../components/ShopOrder.tsx'
// import ShopBar from '../components/ShopBar.tsx' ;
import {
  //HStack,
  //InfiniteScrollArea,
  // Loading,
  VStack
} from "@yamada-ui/react" ;

const ShopHome = () => {
  // const [count, setCount] = useState<number>(50)

  return (
    <div className="bg-neutral-100">
      <VStack>
        <ShopOrder
          time="2024/1/1 00:00"
          num="6"
        />
        <ShopOrder
          time="2024/1/1 00:15"
          num="0"
        />
        <ShopOrder
          time="2024/1/1 00:30"
          num="2"
        />
        <ShopOrder
          time="2024/1/1 00:45"
          num="4"
        />
      </VStack>
    </div>
  )
}

export default ShopHome
