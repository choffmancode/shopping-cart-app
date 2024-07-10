import { useState } from "react";

//styles
import styled from "styled-components";

const StyledCart = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

const CartHeader = styled.div`
    margin-top: 16px;
    text-align: center;

`

const CartContent = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    margin-top: 32px;
`

const CheckoutContent = styled.div`
    bottom: 8px;
`

const CheckoutButton = styled.button`
    

`

export const Cart = ({ cartInventory, setCartInventory }) => {



return (
    <>
        <StyledCart>

            <CartHeader>
                Cart Icon
            </CartHeader>

            {cartInventory && <h1>Here's the cart inventory</h1>}
            <CartContent>
                <h1>Item 1</h1>
                <h1>Item 1</h1>
                <h1>Item 1</h1>
                <h1>Item 1</h1>
            </CartContent>

            <CheckoutContent>
                <CheckoutButton>Checkout</CheckoutButton>
            </CheckoutContent>

        </StyledCart>
    </>
)
}