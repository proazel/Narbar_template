import React from 'react';
import ThemeLayout from '../Components/Layouts/ThemeLayout';
import Mainlayout from '../Components/Layouts/Mainlayout';

const RootProvider = ({children}) => {
    return(
        <>
            <ThemeLayout />
            <Mainlayout>
                {children}
            </Mainlayout>
        </>
    )
}

export default RootProvider;