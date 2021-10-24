import React from 'react';
import { NavbarCss, HeaderWrap } from './Navbar_css';

import NavbarLogo from './Navbar_sub/Navbar_logo';
import NavbarMenu from './Navbar_sub/Navbar_menu';
import NavbarUtil from './Navbar_sub/Navbar_util';

const Navbar = () => {
    return (
        <NavbarCss>
            <HeaderWrap>
                <NavbarLogo />
                <NavbarMenu />
                <NavbarUtil />
            </HeaderWrap>
        </NavbarCss>
    );
}

export default Navbar;