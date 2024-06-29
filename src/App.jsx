import React, { useEffect, useState } from 'react';

// components
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import CartSidebar from './components/CartSidebar';

// utils
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

// styles
import './App.css';
import styled from 'styled-components';

const ContentContainer = styled.div`
    position: absolute;
    width: 100%;
    z-index: -1;
`

const CartContainer = styled.div`
    background-color: black;
    position: fixed;
    float: right;
    transition: right 0.2s ease 0;
    top: 8px;
    right: 0px;
    height: 100%;
    z-index: 99;
`

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const isActive = true
  const [cartCollapsed, setCartCollapsed] = useState(true);
  function handleCartClick () {
    return setCartCollapsed(!cartCollapsed)
}


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/static/json/products.json');
      const json = await response.json();
      setData(json);
    };


    fetchProducts();
  }, []);


  // can use 'collapsed' prop for customizing sidebar open/close
  return (
    <>
      <CartContainer>
        <CartSidebar cartCollapsed={cartCollapsed} setCartCollapsed={setCartCollapsed} handleCartClick={handleCartClick} /> 
      </CartContainer>
    <ContentContainer>
      
      <h1>Shopping Cart App!</h1>
      <ProductList products={products}/>
      <ul>
        {products.map(product => <li key={product.sku}>{product.title}</li>)}
      </ul>
      </ContentContainer>
    </>
  );
};



export default App;