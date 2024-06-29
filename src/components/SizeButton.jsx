import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    padding: 2px 1px;
    
    
`

const Button = styled.button`
 
  align-items: center;
  appearance: none;
  box-shadow: rgba(45, 35, 66, 0.4) 0 1px 2px,rgba(45, 35, 66, 0.3) 0 5px 13px -3px,#D6D6E7 0 -2px 0 inset;
  border-width: 0px;
  
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  font-weight: bold;
  height: 20px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  margin-right: 8px;
  overflow: hidden;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  text-align: left;
  font-size: 16px;

`

export const SizeButton = (size, setSize, checked) => {


    return (
        <>
        
        <Button checked={checked} autoComplete="off" onClick={() => setSize(size.size)} id={size.size} >
            {size.size}
        </Button>
        
    </>
    )
}

//<input type="radio" id={size.size} className="btn-check" checked={checked} autoComplete="off" onChange={() => setSize(size.size)} />
// <label className="btn btn-info m-1 p-2" htmlFor={size.size}>
// { size.size }
// </label>