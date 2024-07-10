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
   // background-color: black !important;
    position: fixed;
    float: right;
    transition: right 0.2s ease 0;
    top: 8px;
    right: 0px;
    height: 100%;
    z-index: 99;
`

const App = () => {

  // fetch/set data
  const [data, setData] = useState({});
  const products = Object.values(data);


  // managing component states
  const [cartCollapsed, setCartCollapsed] = useState(true);
  const [cartInventory, setCartInventory] = useState([['111111111', 'S']])

  // event handlers
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

  console.log("prods1",products)
  // can use 'collapsed' prop for customizing sidebar open/close
  return (
    <>
      <CartContainer>
        <CartSidebar 
          cartInventory={cartInventory} 
          setCartInventory={setCartInventory} 
          cartCollapsed={cartCollapsed} 
          setCartCollapsed={setCartCollapsed} 
          handleCartClick={handleCartClick} /> 
      </CartContainer>
    <ContentContainer>
      
      <h1>Shopping Cart App!</h1>
      <ProductList 
        cartInventory={cartInventory} 
        setCartInventory={setCartInventory}  
        products={products}/>
      </ContentContainer>
    </>
  );
};



export default App;