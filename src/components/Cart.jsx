import { useState } from "react";

//styles
import styled from "styled-components";

//components


const CartContent = styled.div`
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    margin-top: 32px;
    padding: 16px; 
`

const CartItem = styled.div`
    
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: space-between;
    padding: 8px;
    margin-top: 8px;
`

const DeleteButton= styled.button`
    height: 32px;
    padding: 8px;
    vertical-align: text-top;

`

export const Cart = ({ selected, setSelected }) => {

    console.log("test",selected)
    function handleCartXClick (item) { 
        
        const newSelected = selected.filter(
            (val) => val.SKU !== item.SKU || val.size !== item.size
        );
        setSelected(newSelected);
    
    }

    // best to put keys in a parent html tag so that we don't have children with the same keys. Even differnt tag types with same key will be considered duplicates
return (
    <>
            <CartContent>
                {selected.map((item) => 
                    <CartItem key={`${item.SKU}_${item.size}`}>
                        <p >{`${item.title}-${item.size}`}</p>
                        <DeleteButton onClick={() => {handleCartXClick(item)}} >X</DeleteButton>
                    </CartItem>
                        )}
            </CartContent>
    </>
)
};