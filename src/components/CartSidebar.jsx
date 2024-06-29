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

// look into making StyledCart that will spread each piece of cart content evenly

const CartSidebar = ({cartCollapsed, setCartCollapsed, handleCartClick}) => {

    return(
            <>
                <button onClick={handleCartClick}>{cartCollapsed ? "Open" : "Close"}</button>
                
                    <StyledSidebar backgroundColor="rgb(0, 0, 0)" collapsed={cartCollapsed} collapsedWidth="0px">
                        <Cart />
                    </StyledSidebar>
                
            </>
        )
}

export default CartSidebar;