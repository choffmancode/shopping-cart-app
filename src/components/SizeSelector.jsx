import { useState } from "react"
import { SizeButton } from "./SizeButton"

import { sizes } from "../utils/sizes"

//styles
import styled from "styled-components"


const Container = styled.div`
    background-color: white;
    display: flex;
    margin-bottom: 8px;

`

// bring state into size buttons
// only render size button if matching size exists in inventory
// onClick => setCartInventory([...cartInventory, ['1111111111', 'S']])


export const SizeSelector = ({product, matchingInventory, cartInventory, setCartInventory, selected, setSelected}) => {


    return (
        <>
        <Container>
                
                { 
                Object.values(sizes).map(
                    value => <SizeButton product={product} selected={selected} setSelected={setSelected} key={value} child={value} />
                )
                }
                
        </Container>
        
        </>
    )

}