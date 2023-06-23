import { ReactNode } from 'react';

import { Button } from '../Button';
import { Container, PriceCardHeader, PriceValue, PriceItems, TextPrice, Text } from './styles';

interface PricingCardProps {
  children: ReactNode;
  typePlan: string;
  value: string;
}

export function CardsPricing({ children, typePlan, value }: PricingCardProps) {
  return (
    <Container>

      <PriceCardHeader>
        <h3>{typePlan}</h3>
      </PriceCardHeader>

      <PriceValue>
        <TextPrice>R$ {value}</TextPrice>
        <Text>/Mês</Text>
      </PriceValue>

      <PriceItems>
        {children}
      </PriceItems>

      <Button
        onClick={()=>{
          alert('clicou');
        }}
        placeholder='Saiba mais'
        background='#1475FF'
        color='#f5f5f5'
        height='42px'
        width='200px'
      />

    </Container>
  );
}
