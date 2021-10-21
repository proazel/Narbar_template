import React from 'react';
import Main from '../Main';

const Mainlayout = ({children}) => {
    return(
        <>
            <Main />
            {children}
        </>
    )
}

export default Mainlayout;