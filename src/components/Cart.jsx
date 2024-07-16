import { useState } from "react";

//styles
import styled from "styled-components";

//components
import { CartFooter } from "./CartFooter";

const StyledCart = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

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


export const Cart = ({ selected, setSelected }) => {



return (
    <>
        <StyledCart>

            <CartContent>
                {selected?.map((item) => <p key={item.sku} >{item.title}</p>)}
            </CartContent>


            

        </StyledCart>
    </>
)
}