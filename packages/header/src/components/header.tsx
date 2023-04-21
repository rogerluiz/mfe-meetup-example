import { styled } from '../stitches.config';

import { Container } from '../elements/container';
import { Icon } from '../elements/icon';
import { Text } from '../elements/text';

import CardList from 'cart/CardList';

function Header() {
  return (
    <BaseContainer id="header">
      <Container>
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
            <CartButton>
              <Icon icon={['fal', 'shopping-cart']} size="2x" color="light" />
            </CartButton>

            <Popover>
              <CardList />
            </Popover>
          </Cart>
        </Content>
      </Container>
    </BaseContainer>
  );
}

export default Header;

const Popover = styled('div', {
  display: 'flex',
  position: 'absolute',
  top: '90px',
  width: '300px',
  right: '20px',
});

const BaseContainer = styled('header', {
  width: '100%',
  height: 80,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$primary',
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
