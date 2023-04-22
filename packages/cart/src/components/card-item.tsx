import { styled } from '../stitches.config';
import { convertPrice } from './card';

export interface CardItemProsp {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export function CardItem({ id, title, price, thumbnail }: CardItemProsp) {
  return (
    <Content id={id.toString()}>
      <ImageContainer>
        <img src={thumbnail} alt={title} />
      </ImageContainer>
      <TitleContainer>{title}</TitleContainer>
      <PriceContainer>{convertPrice(price)}</PriceContainer>
    </Content>
  );
}

const Content = styled('div', {
  width: '100%',
  height: 60,
  padding: 4,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$grayLight',
  gap: 8,
});

const ImageContainer = styled('div', {
  width: 50,
  height: 50,
  overflow: 'hidden',
  img: {
    width: '100%',
  },
});

const TitleContainer = styled('div', {
  flex: 1,
});

const PriceContainer = styled('div', {
  // flex: 1,
  minWidth: 70,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
