import { Product } from "./Product";


// styles
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 17rem));
  
`

export const ProductList = ({products}) => {

    return (
        <>
        <h2>{products.length} products</h2>
        <Container>
        
            {products.map(product => <Product key ={product.sku} product={product}/>)}
        
        </Container>
        </>
    )
}