import React, { useEffect, useState } from 'react';
import { isEqual } from 'lodash';

// components
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import CartSidebar from './components/CartSidebar';

// utils
import { useData } from './utils/firebase';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

// styles
import './App.css';
import styled from 'styled-components';

const ContentContainer = styled.div`
    //padding: 0px, 50px;
    position: absolute;
    overflow-x: hidden;
    width: 100%;
    z-index: -1;
`

const CartContainer = styled.div`
    background-color: black !important;
    position: fixed;
    float: right;
    transition: right 0.2s ease 0;
    top: 0px;
    right: 0px;
    height: 100%;
    z-index: 99;
`

const Main = () => {

  // Fetch data
  const [products, inventory, isLoading, error] = useData();

  // managing states
  const [cartCollapsed, setCartCollapsed] = useState(true);
  const [productInventory, setProductInventory] = useState([])
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (!isEqual(inventory, productInventory)) {
      setProductInventory(inventory);
    }
  }, [inventory, productInventory]);
  console.log("3^ testerino", inventory)

  // event handlers - this particular one should go down in CartSidebar
  function handleCartClick () {
    return setCartCollapsed(!cartCollapsed)
  }

    if (error) return <h1>{error}</h1>;
    if (isLoading) return <h1>Loading the store...</h1>

  return (
    <>
      <CartContainer>
        <CartSidebar 
          selected = {selected}
          setSelected = {setSelected}
          cartCollapsed = {cartCollapsed}
          handleCartClick = {handleCartClick} /> 
      </CartContainer>
    <ContentContainer>
      
      <h1>Shopping Cart App!</h1>
      <ProductList 
        selected = {selected}
        setSelected = {setSelected}  
        products = {products}
        productInventory = {productInventory}
        setProductInventory = {setProductInventory}
      />
      </ContentContainer>
    </>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Main />
  </QueryClientProvider>
);



export default App;