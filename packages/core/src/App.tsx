import React, { lazy, useEffect } from 'react';

import { styled } from './stitches.config';
import globalStyles from './global-style';
import { Container } from './elements/container';

// import CardGrid from 'cart/CardGrid';

const Header = lazy(() => import('header/Header'));
const Footer = lazy(() => import('footer/Footer'));
const CardGrid = lazy(() => import('cart/CardGrid'));

export function App() {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <>
      <React.Suspense fallback="Loading Header">
        <Header />
      </React.Suspense>

      <Main>
        <Container>
          <React.Suspense fallback="Loading Grid">
            <CardGrid onAddCart={(id: number) => console.log(id)} />
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
