import React from 'react';
import { useSelector } from 'react-redux';
import ThemeLayout from '../Components/Layouts/ThemeLayout';
import Mainlayout from '../Components/Layouts/Mainlayout';
import { BrightMode, DarkMode } from './rootProvider_css';

const RootProvider = ({children}) => {
    const { brightMode } = useSelector((state) => state.mode);

    return (
        <>
            <ThemeLayout />
            <Mainlayout>
                {
                    brightMode
                    ? <BrightMode>{children}</BrightMode>
                    : <DarkMode>{children}</DarkMode>
                }
            </Mainlayout>
        </>
    );
}

export default RootProvider;