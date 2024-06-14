export const Product = (product) => {

    console.log("p test", product)
    return (
        <div className="card m-1 p-2">
            <div className="card-body">
                <div>
                <img className="img-fluid" src={`public/data/static/products/${product.product.sku}-1-product.webp`} alt="card image"></img>

                </div>
                <div className="d-flex flex-column">
                    <div> 
                        <div className="card-title">{product.product.title}</div>
                    </div>
                    <div>
                        <div className="card-text">{product.product.price}</div>
                        <div className="card-text">Price subtext</div>
                    </div>
                </div>
                

            </div>

        </div>
        
    );
}