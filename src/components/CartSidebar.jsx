import { React } from 'react'

// components
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';
import { Cart } from './Cart';
import { CartFooter } from './CartFooter';

//styles
import styled from 'styled-components';

const Container = styled.div`
    background-color: black !important;
    border-color: white;
    border-width: 0px;
    height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 100
    

`

const StyledSidebar = styled(Sidebar)`
   // background-color: black !important;
    // height: 680px;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    //max-height: 100vh;
    border-width: 0px !important;
    z-index: 101
`

const CartIcon = styled.img`
    align-items: center;
    background-color: black;
    padding: 4px;
    
`

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
`




// look into making StyledCart that will spread each piece of cart content evenly

const CartSidebar = ({cartCollapsed, handleCartClick, selected, setSelected}) => {

    
    return (
            <>
            <CartIcon onClick={handleCartClick} src="/data/static/cart-icon.png"></CartIcon>
                <Container >
                
                
                <StyledSidebar 
                    backgroundColor="rgb(1, 0, 0)" 
                    rtl={false} 
                    collapsed={cartCollapsed} 
                    collapsedWidth="0px"
                    rootStyles={{height: '600px'}}>

                    <Cart  
                        selected={selected} 
                        setSelected={setSelected} />
                
                </StyledSidebar>
                <StyledSidebar
                    backgroundColor="rgb(1, 0, 0)" 
                    collapsed={cartCollapsed} 
                    collapsedWidth="0px"
                    rootStyles={{height: '150px' }}>
                        <FooterContent>
                            <CartFooter selected={selected} />
                        </FooterContent>
                </StyledSidebar>
                
                
                
                </Container>
            </>
                
            
        )
}


// public\data\static\cart-icon.png
export default CartSidebar;