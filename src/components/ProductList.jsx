import { Product } from "./Product";
import { useState } from "react";

// utils
import { addToCart } from "../utils/sizes";

// styles
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 17rem));
    scrollbar-width: none;
`

export const ProductList = ({products, selected, setSelected}) => {

    

    return (
        <>
        <h2>{products.length} products</h2>
        <Container>
        
            {products.map(product => <Product 
                                        selected={selected}
                                        setSelected={setSelected}
                                        key={product.sku} 
                                        product={product}/>)}
        
        </Container>
        </>
    )
}