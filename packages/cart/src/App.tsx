import { useCallback, useEffect, useState } from 'react';
import Card, { Product } from './components/card';
import CardGrid from './components/card-grid';
import CardList from './components/card-list';

import globalStyles from './global-style';
import { useStore } from './store';

function App() {
  const { products, getProduct, cartList } = useStore();

  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    globalStyles();
  }, []);

  useEffect(() => {
    getProduct(5);
  }, [getProduct]);

  const onAddCart = useCallback(
    (id: number) => {
      if (products === null) {
        return;
      }

      const filtered = products.filter((item) => item.id === id)[0];

      setData(filtered);
    },
    [products],
  );

  console.log(cartList);

  if (products === null) return <div>Loading...</div>;

  return (
    <article>
      {/* <Card data={products ? products[0] : null} /> */}
      <CardGrid onAddCart={onAddCart} />
      <CardList data={data} />
    </article>
  );
}

export default App;
