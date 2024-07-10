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
    background-color: #F0EAD6;
    bottom: 8px;
    color: black;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;

`

const CheckoutButton = styled.button`
    background-color: orange;
    color: white;

`

export const Cart = ({ selected, setSelected }) => {

const totalPrice = selected.reduce((total, curVal) => {
    return total + curVal.price;
}, 0);


return (
    <>
        <StyledCart>

            <CartHeader>
                Cart Icon
            </CartHeader>

            <CartContent>
                {selected?.map((item) => <p>{item.title}</p>)}
            </CartContent>

            <CheckoutContent>
                <h1>Total: {totalPrice}</h1>
                <CheckoutButton>Checkout</CheckoutButton>
            </CheckoutContent>

        </StyledCart>
    </>
)
}