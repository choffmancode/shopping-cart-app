import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { React } from 'react'



const CartSidebar = () => {

    return(
                <>

                    <Sidebar>
                    <Menu>
                        <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <MenuItem> Documentation </MenuItem>
                        <MenuItem> Calendar </MenuItem>
                    </Menu>
                    </Sidebar>

            </>
        )
}

export default CartSidebar;