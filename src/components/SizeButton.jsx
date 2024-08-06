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



export const SizeButton = ({product, productInventory, setProductInventory ,selected, setSelected, child}) => {
    
    const [counter, setCounter]= useState([])

    function handleSizeClick() {
        // Find the product in the inventory
        const updatedInventory = productInventory.map(item => {
            if (item.sku === product.sku) {
                // Reduce the size count by 1
                return {
                    ...item,
                    child: item[child] > 0 ? item[child] - 1 : 0 // Ensure the count doesn't go below 0
                };
            }
            return item;
        });
    
        // Update the selected state
        setSelected([...selected, {
            SKU: product.sku,
            size: child,
            price: product.price,
            title: product.title
        }]);
    
        // Update the product inventory state
        setProductInventory(updatedInventory);

        setCounter(counter + 1)
    }
    return (
        <>
        
        <Button onClick={handleSizeClick} autoComplete="off" id={`${product.sku}-${child}-${counter}`} >
            {child}
        </Button>
        
    </>
    )
}