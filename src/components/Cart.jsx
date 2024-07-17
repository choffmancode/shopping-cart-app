import { useState } from "react";

//styles
import styled from "styled-components";

//components


const StyledCart = styled.div`
    color: white;
`
const CartContent = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    margin-top: 32px;
    
`

const deleteIcon = styled.span`

`

export const Cart = ({ selected, setSelected }) => {

    function handleCartXClick () {
        // const itemIndex = selected.find((selectedItem) => selectedItem.SKU === item.SKU)
        // console.log('test-index', itemIndex)
        console.log("testitem", this.item)
        // const newSelected = selected.filter((val) => val.SKU !== item.SKU);
        // console.log("testsel", newSelected)
        //setSelected(newSelected)
    }

    // it needs to remove item from the selected list inside of setSelected. use .filter() where selecteditem = item
return (
    <>
        <StyledCart>

            <CartContent>
                {selected?.map((item) => 
                    <>
                        <p key={item.sku} >{item.title}</p>
                        <button id={item.sku} onClick={handleCartXClick} >X</button>
                    </>
                        )}
            </CartContent>


        </StyledCart>
    </>
)
};