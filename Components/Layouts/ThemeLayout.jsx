import React from 'react';
import Navbar from '../Navbar/Navbar';

const ThemeLayout = ({children}) => {
    return(
        <>
            <Navbar />
            {children}
        </>
    )
}

export default ThemeLayout;