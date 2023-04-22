import { useCallback, useState, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { styled } from '../stitches.config';

import { Container } from '../elements/container';
import { Icon } from '../elements/icon';
import { Text } from '../elements/text';

import CardList from 'cart/CardList';

function Header() {
  const popoverRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handlePopoverToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback(() => {
    setOpen(false);
  }, []);

  useOnClickOutside(popoverRef, handleClickOutside);

  return (
    <BaseContainer id="header">
      <Container css={{ position: 'relative' }}>
        <Content>
          <Logo>
            <Icon icon={['fas', 'whale']} size="2x" color="light" />
          </Logo>

          <Cart>
            <CartInfo>
              <Text color="white" size={12}>
                Items: 0
              </Text>
              <Text color="white" size={12}>
                Total: R$ 0,00
              </Text>
            </CartInfo>
            <CartButton onClick={handlePopoverToggle}>
              <Icon icon={['fal', 'shopping-cart']} size="2x" color="light" />
            </CartButton>

            <Popover ref={popoverRef} open={open}>
              <CardList data={null} onClose={handlePopoverToggle} />
            </Popover>
          </Cart>
        </Content>
      </Container>
    </BaseContainer>
  );
}

export default Header;

const Popover = styled('div', {
  position: 'absolute',
  top: 80,
  width: 350,
  right: 20,

  variants: {
    open: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },
});

const BaseContainer = styled('header', {
  width: '100%',
  height: 80,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$primary',
  position: 'relative',
});

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Logo = styled('h1');

const Cart = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
});
const CartInfo = styled('div', {
  marginRight: 16,
});
const CartButton = styled('button', {
  background: 'transparent',
  border: 'none',
});
