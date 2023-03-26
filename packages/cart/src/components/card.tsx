// import { useCallback } from 'react';
import { Button } from '../elements/button';
// import { Icon } from '../elements/icon';
import { Text } from '../elements/text';
import { styled } from '../stitches.config';

const Container = styled('div', {
  width: '100%',
  maxWidth: 400,
  height: 400,
  backgroundColor: '$white',
  borderRadius: 8,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$grayDark',
  boxShadow: '0px 1px 4px #00000029;',
  display: 'flex',
  padding: 20,
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export interface CardProps {
  data: Product | null;
}

function Card({ data }: CardProps) {
  if (data === null) {
    <Container>empty</Container>;
  }

  const { id, thumbnail, title, price } = data as Product;

  return (
    <Container id={id.toString()}>
      <div>
        <img src={thumbnail} alt={title} />
      </div>
      <div>
        <Text>{title}</Text>
        <Text>{price}</Text>
      </div>
      <div>
        <Button>ADD TO CART</Button>
      </div>
    </Container>
  );
}

export default Card;
