// import { useCallback, useEffect } from 'react';
// import { Button } from '../elements/button';
// import { Icon } from '../elements/icon';
import { styled } from '../stitches.config';

const Content = styled('div', {
  display: 'flex',
  width: '100%',
});

const ImageContainer = styled('div', {
  width: '20%',
  img: {
    width: '100%',
  },
});

const TitleContainer = styled('div', {});

const PriceContainer = styled('div', {});

export interface CardItemProsp {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
}

export function CardItem({ id, title, price, thumbnail }: CardItemProsp) {
  return (
    <Content id={id.toString()}>
      <ImageContainer>
        <img src={thumbnail} alt={title} />
      </ImageContainer>
      <TitleContainer>{title}</TitleContainer>
      <PriceContainer>{price}</PriceContainer>
    </Content>
  );
}
