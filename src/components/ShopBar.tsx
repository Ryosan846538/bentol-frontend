import React from 'react' ;
import {
    Text
} from '@yamada-ui/react';

interface ShopBarProps {
    time: string;
    }

const ShopBar: React.FC<ShopBarProps> = ({time}) => {
  return (
    <div className="box-border h-30 w-aute p-2 border-0 bg-emerald-200 shadow-md">
      <Text>
        {time}
      </Text>
    </div>
  )
}

export default ShopBar;
