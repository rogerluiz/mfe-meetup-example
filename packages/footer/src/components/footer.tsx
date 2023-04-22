import { Text } from '../elements/text';
import { styled } from '../stitches.config';

function Footer() {
  return (
    <Container>
      <Text size={12} color="primary">
        2023 ©
      </Text>
    </Container>
  );
}

export default Footer;

const Container = styled('footer', {
  width: '100%',
  height: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$grayLight',
  borderTop: '1px solid $primary',
});
