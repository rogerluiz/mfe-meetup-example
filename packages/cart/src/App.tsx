import { useEffect, useState } from 'react';
import Card, { Product } from './components/card';
import CardList from './components/card-list';
import globalStyles from './global-style';

function App() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    globalStyles();
  }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=5')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  console.log(products);
  return (
    <article>
      <Card data={products ? products[0] : null} />
      <CardList data={products} />
    </article>
  );
}

export default App;
