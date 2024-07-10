import { React } from 'react'

// components
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';
import { Cart } from './Cart';

//styles
import styled from 'styled-components';

const Container = styled.div`
    background-color: black !important;
    border-color: white;
    border-width: 0px;
    z-index: 100
    

`

const StyledSidebar = styled(Sidebar)`
   // background-color: black !important;
    height: 1800px;
    border-width: 0px !important;
    z-index: 101
`

const CartIcon = styled.img`
    background-color: black;
    padding: 4px;
`

// look into making StyledCart that will spread each piece of cart content evenly

const CartSidebar = ({cartCollapsed, setCartCollapsed, handleCartClick, cartInventory, setCartInventory, selected, setSelected}) => {

    return (
            
            <Container >
                <CartIcon onClick={handleCartClick} src="/data/static/cart-icon.png"></CartIcon>
                
                <StyledSidebar backgroundColor="rgb(0, 0, 0)" collapsed={cartCollapsed} collapsedWidth="0px">
                        <Cart  
                            selected={selected} 
                            setSelected={setSelected} 
                        />
                </StyledSidebar>
            </Container>
                
            
        )
}


// public\data\static\cart-icon.png
export default CartSidebar;