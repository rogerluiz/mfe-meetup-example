import React, { lazy, useEffect } from 'react';

import { styled } from './stitches.config';
import globalStyles from './global-style';

import { Container } from './elements/container';

import useStore from 'cart/useStore';

const Header = lazy(() => import('header/Header'));
const CardGrid = lazy(() => import('cart/CardGrid'));
const Footer = lazy(() => import('footer/Footer'));

export function App() {
  const { addCart } = useStore();

  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Header />
      </React.Suspense>
      <Main>
        <Container>
          <React.Suspense fallback="Loading Grid">
            <CardGrid
              onAddCart={(data: any) => {
                // document.dispatchEvent(
                //   new CustomEvent('add-cart', { detail: data }),
                // );
                addCart(data);
              }}
            />
          </React.Suspense>
        </Container>
      </Main>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Footer />
      </React.Suspense>
    </>
  );
}

const Main = styled('section', {
  padding: 16,
});
