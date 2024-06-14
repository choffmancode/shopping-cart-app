import { Product } from "./Product";

export const ProductList = ({products}) => {

    return (
        <>
        <h2>{products.length} products</h2>
        <div className="product-list">
            {products.map(product => <Product key ={product.sku} product={product}/>)}
        </div>
        </>
    )
}