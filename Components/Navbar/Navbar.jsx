import React from 'react';
import { NavbarCss, HeaderWrap } from './Navbar_css';
import { RiBearSmileLine } from 'react-icons/ri';

import NavbarMenu from './Navbar_menu';

const Navbar = () => {
    return(
        <NavbarCss>
            <div id="navbarContainer">
                <HeaderWrap>
                    {/* 로고 */}
                    <div id="logo">
                        <span><RiBearSmileLine size="34" color="#fff" cursor="pointer" /></span>
                    </div>

                    {/* 메뉴 */}
                    <div id="menu">
                        <NavbarMenu />
                    </div>

                    {/* 공사중 */}
                    <div id="util">그 외 메뉴</div>
                </HeaderWrap>
            </div>
        </NavbarCss>
    );
}

export default Navbar;