import { useState } from "react";

export const Cart = () => {
const [cartOpen, setCartOpen] = useState(false)
//  {cartOpen ? <h1>Cart here</h1>: <h1>Nothing here!</h1>}
return (
    <>
        <div>
            <button onClick={() => setCartOpen(!cartOpen)}>{cartOpen ? "Close" : "Open"}</button>
            {cartOpen ? <h1>Cart here</h1>: <h1>Nothing here!</h1>}
        </div>
    </>
)
}