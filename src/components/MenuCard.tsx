import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@yamada-ui/react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <Card>
      <CardHeader></CardHeader>
    </Card>
  );
};

export default Card;
