import React from 'react';
import { NavbarCss, HeaderWrap } from './Navbar_css';
import { RiBearSmileLine } from 'react-icons/ri';

import NavbarMenu from './Navbar_menu';

const Navbar = () => {
    return(
        <NavbarCss>
            <div id="navbarContainer">
                <HeaderWrap>
                    {/* logo */}
                    <div id="logo">
                        <span><RiBearSmileLine size="34" color="#fff" cursor="pointer" /></span>
                    </div>

                    {/* menu */}
                    <div id="menu">
                        <NavbarMenu />
                    </div>

                    {/* util */}
                    <div id="util">그 외 메뉴</div>
                </HeaderWrap>
            </div>
        </NavbarCss>
    );
}

export default Navbar;