import React, { useEffect, useState } from 'react';

// components
import { ProductList } from './components/ProductList';

// utils
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

// styles
import './App.css';

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/static/json/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Shopping Cart App!</h1>
      <ProductList products={products}/>
      <ul>
        {products.map(product => <li key={product.sku}>{product.title}</li>)}
      </ul>
    </div>
  );
};



export default App;