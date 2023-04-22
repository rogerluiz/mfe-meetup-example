import { memo, useCallback, useEffect, useMemo } from 'react';
import { Button } from '../elements/button';
// import { Icon } from '../elements/icon';
import { Text } from '../elements/text';
import { styled } from '../stitches.config';

import { CardItem } from './card-item';

import { useStore, CartList, Product } from '../store';
import { convertPrice } from './card';

export interface CardListProps {
  data: Product | null;
  onClose?: () => void;
}

function CardList({ data, onClose }: CardListProps) {
  const { cartList, addCart } = useStore();

  useEffect(() => {
    if (data === null) return;

    addCart(data);
  }, [data, addCart]);

  const handleOnClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const renderItems = useMemo(() => {
    return cartList !== null
      ? cartList?.products?.map(({ id, title, price, thumbnail }: any) => (
          <CardItem
            key={id}
            id={id}
            title={title}
            price={price}
            thumbnail={thumbnail}
          />
        ))
      : null;
  }, [cartList]);

  if (cartList === null || cartList?.products?.length <= 0) {
    return (
      <Container>
        <IconContainer>
          <img
            src={`${process.env.PUBLIC_URL}/assets/cart-empty.svg`}
            alt="Carrinho vazio"
          />
        </IconContainer>
        <TextContainer>
          <Text size={22} variant="bold" color="dark" css={{ marginBottom: 8 }}>
            Seu carrinho está vazio!
          </Text>
          <Text>parece que você ainda não adicionou nada ao carrinho</Text>
        </TextContainer>
        <Button onClick={handleOnClose}>Ir para home</Button>
      </Container>
    );
  }

  const { totalProducts, total } = cartList;

  return (
    <Container>
      <CartHeader>
        <Text>Compras</Text>
        <Text>{totalProducts}</Text>
      </CartHeader>
      <CartContent>{renderItems}</CartContent>
      <CartFooter>
        <Text variant="semibold">{convertPrice(total)}</Text>
        <Button disabled>Concluir compras</Button>
      </CartFooter>
    </Container>
  );
}

export default memo(CardList);

const Container = styled('div', {
  width: '100%',
  maxWidth: 400,
  height: 400,
  backgroundColor: '$white',
  borderRadius: 8,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$primaryMedium',
  boxShadow: '0px 1px 4px #00000029;',
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 8,
});

const CartHeader = styled('div', {
  width: '100%',
  display: 'flex',
  paddingBottom: 8,
  borderBottom: '1px solid $primaryLight',
  justifyContent: 'space-between',
});

const CartContent = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 250,
  overflowY: 'auto',
  gap: 8,
});

const CartFooter = styled('div', {
  width: '100%',
  paddingTop: 8,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid $primaryLight',
});

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const IconContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  backgroundColor: '$grayLight',
  size: 120,
  margin: 16,

  img: {
    width: '100%',
  },
});
