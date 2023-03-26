import { useCallback } from 'react';
import { Button } from '../elements/button';
import { Icon } from '../elements/icon';
import { styled } from '../stitches.config';
import { CardItem } from './card-item';

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

export interface CardListProps {
  data: any;
}

function CardList({ data }: CardListProps) {
  const renderEmpty = useCallback(() => {
    return (
      <>
        <Icon
          icon={['far', 'dolly-flatbed-empty']}
          size="8x"
          color="primaryMedium"
        />
        <Button>CHECKOUT</Button>
      </>
    );
  }, []);

  const renderItems = useCallback(() => {
    return data.map(({ id, title, price, thumbnail }: any) => (
      <CardItem
        key={id}
        id={id}
        title={title}
        price={price}
        thumbnail={thumbnail}
      />
    ));
  }, [data]);

  if (data === undefined) {
    return renderEmpty();
  }

  return (
    <Container>{data.lenght <= 0 ? renderEmpty() : renderItems()}</Container>
  );
}

export default CardList;
