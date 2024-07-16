import React from "react";

//styles
import styled from "styled-components";


const CheckoutContent = styled.div`
    background-color: #F0EAD6;
    bottom: 8px;
    color: black;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    width: 100%;

`

const CheckoutButton = styled.button`
    background-color: orange;
    color: white;

`




export const CartFooter = ({selected}) => {
    const totalPrice = selected?.reduce((total, curVal) => {
        return total + curVal.price;
    }, 0);
    
    
    const roundedTotal1 = totalPrice * 100
    const roundedTotal2 = Math.round(roundedTotal1)
    let roundedTotal3 = roundedTotal2 / 100


        return <>
            <CheckoutContent>
                <h1>Total: {roundedTotal3}</h1>
                <CheckoutButton>Checkout</CheckoutButton>
            </CheckoutContent>
        </>
 

        
    
}