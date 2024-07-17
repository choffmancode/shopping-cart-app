import { React } from 'react'

// components
import { Sidebar } from 'react-pro-sidebar';
import { Cart } from './Cart';
import { CartFooter } from './CartFooter';

//styles
import styled from 'styled-components';

const Container = styled.div`

`

const StyledSidebar = styled(Sidebar)`
    border-width: 0px !important;
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

export default CartSidebar;