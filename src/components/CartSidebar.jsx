import { React } from 'react'

// components
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';
import { Cart } from './Cart';

//styles
import styled from 'styled-components';

const Container = styled.div`
    border-color: white;
    border-width: 0px;
    

`

const StyledSidebar = styled(Sidebar)`
    background-color: black !important;
    height: 1800px;
    border-width: 0px !important;
    z-index: 1
`

const CartSidebar = ({cartCollapsed, setCartCollapsed, handleCartClick}) => {

    return(
                <>
                <button onClick={handleCartClick}>{cartCollapsed ? "Open" : "Close"}</button>
                <Container>
                    
                    <StyledSidebar collapsed={cartCollapsed} collapsedWidth="0px">
                    <Cart />
                    </StyledSidebar>
                </Container>
            </>
        )
}

export default CartSidebar;