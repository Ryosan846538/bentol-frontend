import React from 'react'
import { 
    Text,
    VStack
 } from '@yamada-ui/react'

interface TextProps{
    title:string;
    description:string;
}

const OrderInfo:React.FC<TextProps> = ({ title, description }) => {
  return (
    <div>
      <VStack>
        <Text
          as="b"
          fontSize="2xl"
          color="white"
        >
          {title}
        </Text>
        <Text
          align="center"
          as="b"
          fontSize="xl"
          color="white"
        >
          {description}
        </Text>
      </VStack>
    </div>
  )
}

export default OrderInfo
