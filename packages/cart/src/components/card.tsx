import { useCallback } from 'react';
import { Button } from '../elements/button';
import { Text } from '../elements/text';
import { styled } from '../stitches.config';
import { Product } from '../store';

export interface CardProps {
  data: Product | null;
  onAddCart?: (product: Product) => void;
}

export const convertPrice = (price: number) => {
  const returnPrice = price * 5.17;
  return returnPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

function Card({ data, onAddCart }: CardProps) {
  const handleAddCart = useCallback(
    (product: Product) => {
      onAddCart?.(product);
    },
    [onAddCart],
  );

  if (data === null) {
    return <CardContainer>empty</CardContainer>;
  }

  const { id, thumbnail, title, price, description } = data;

  return (
    <CardContainer id={id.toString()}>
      <CardFigure>
        <CardImage src={thumbnail} alt={title} />
      </CardFigure>
      <CardContent>
        <Text size={14} variant="bold" css={{ marginBottom: 16 }}>
          {title}
        </Text>
        <Text size={13} color="dark">
          {description}
        </Text>
      </CardContent>
      <CardButtonGroup>
        <Text variant="semibold" size={14}>
          {convertPrice(price)}
        </Text>
        <Button onClick={() => handleAddCart(data)}>Comprar</Button>
      </CardButtonGroup>
    </CardContainer>
  );
}

export type { Product } from '../store';
export default Card;

const CardContainer = styled('div', {
  width: '100%',
  maxWidth: 500,
  backgroundColor: '$white',
  borderRadius: 8,
  overflow: 'hidden',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$primaryLight',
  display: 'flex',
  flexDirection: 'column',
});

const CardFigure = styled('figure', {
  width: '100%',
  height: 300,
  overflow: 'hidden',
});
const CardImage = styled('img', {
  width: '100%',
  height: 300,
  objectFit: 'cover',
  borderBottom: '1px solid $primaryLight',
});

const CardContent = styled('div', {
  padding: 20,
  height: 120,
  display: 'flex',
  flexDirection: 'column',
});

const CardButtonGroup = styled('div', {
  padding: 20,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid $primaryLight',
});
