import { styled } from '../stitches.config';

const Container = styled('header', {
  width: '100%',
  height: 100,
  backgroundColor: '$dark',
});

function Header() {
  return <Container id="header">header</Container>;
}

export default Header;
