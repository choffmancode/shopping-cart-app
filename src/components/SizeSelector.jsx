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

export const SizeSelector = () => {
    const [size, setSize] = useState("S")
    const [selected, setSelected] = useState([]);

    return (
        <>
        <Container>
                
                { 
                Object.values(sizes).map(
                    value => <SizeButton key={value} size={value} setSize={setSize} checked={value === size} />
                )
                }
                
        </Container>
        
        </>
    )

}