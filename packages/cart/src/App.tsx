import { useEffect, useState } from 'react';
import Card, { Product } from './components/card';
import CardGrid from './components/card-grid';
import CardList from './components/card-list';

import globalStyles from './global-style';
import { useStore } from './store';

function App() {
  const { products, getProduct } = useStore();

  useEffect(() => {
    globalStyles();
  }, []);

  useEffect(() => {
    getProduct(5);
  }, [getProduct]);

  if (products === null) return <div>Loading...</div>;

  return (
    <article>
      {/* <Card data={products ? products[0] : null} /> */}
      <CardList data={undefined} />

      {/* <CardGrid /> */}
    </article>
  );
}

export default App;
