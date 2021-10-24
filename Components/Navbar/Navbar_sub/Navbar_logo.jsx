import React from 'react';
import { RiBearSmileLine } from 'react-icons/ri';

const NavbarLogo = () => {
    return (
        <div id="logo">
            <span>
                <RiBearSmileLine
                    size="34"
                    color="#fff"
                    cursor="pointer"
                />
            </span>
        </div>
    );
}

export default NavbarLogo;