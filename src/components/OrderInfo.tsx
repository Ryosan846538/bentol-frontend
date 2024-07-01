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
          color="black"
        >
          {title}
        </Text>
        <Text
          align="center"
          as="b"
          fontSize="xl"
          color="black"
        >
          {description}
        </Text>
      </VStack>
    </div>
  )
}

export default OrderInfo
