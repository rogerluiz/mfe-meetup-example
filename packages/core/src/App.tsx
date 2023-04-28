import React, { lazy, useEffect } from 'react';

import useStore from 'cart/useStore';

import { styled } from './stitches.config';
import globalStyles from './global-style';
import { Container } from './elements/container';

const Header = lazy(() => import('header/Header'));
const Footer = lazy(() => import('footer/Footer'));
const CardGrid = lazy(() => import('cart/CardGrid'));

export function App() {
  const { addCart } = useStore();

  useEffect(() => {
    globalStyles();
  }, []);

  console.log(addCart);

  return (
    <>
      <React.Suspense fallback="Loading Header">
        <Header />
      </React.Suspense>

      <Main>
        <Container>
          <React.Suspense fallback="Loading Grid">
            <CardGrid
              onAddCart={(data: any) => {
                document.dispatchEvent(
                  new CustomEvent('add-cart', { detail: data }),
                );
                // addCart(data);
              }}
            />
          </React.Suspense>
        </Container>
      </Main>

      <React.Suspense fallback="Loading Footer">
        <Footer />
      </React.Suspense>
    </>
  );
}

const Main = styled('section', {
  padding: 16,
});
