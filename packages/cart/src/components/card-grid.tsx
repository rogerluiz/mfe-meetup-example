import { useCallback, useEffect, useMemo } from 'react';
import { styled } from '../stitches.config';
import { useStore } from '../store';
import Card from './card';
import { Container } from '../elements/container';

export interface CardGridProps {
  onAddCart?: (id: number) => void;
}

function CardGrid({ onAddCart }: CardGridProps) {
  const { products, getProduct } = useStore();

  useEffect(() => {
    getProduct(5);
  }, [getProduct]);

  const handleAddCart = useCallback(
    (id: number) => {
      onAddCart?.(id);
    },
    [onAddCart],
  );

  const list = useMemo(() => {
    return products
      ? products.map((product) => (
          <div key={product.id}>
            <Card data={product} onAddCart={handleAddCart} />
          </div>
        ))
      : null;
  }, [products, handleAddCart]);

  if (products === null) return <div>Loading...</div>;

  return <Grid>{list}</Grid>;
}

export default CardGrid;

const Grid = styled(Container, {
  display: 'flex',
  flexWrap: 'wrap',

  '> div': {
    padding: 8,
    '@xs': {
      width: '100%',
    },

    '@md': {
      width: '50%',
    },
    '@lg': {
      width: '33.333333%',
    },
  },
});
