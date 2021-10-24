import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { viewModeChangeAction } from '../../../reducers/mode';

const NavbarUtil = () => {
    const dispatch = useDispatch();
    const { brightMode } = useSelector((state) => state.mode);
    
    // viewModeChange
    const handleMode = () => {
        dispatch(viewModeChangeAction(brightMode));
    }
    
    return (
        <div id="util">
            <div id="viewMode" onClick={handleMode}>
                {
                    brightMode
                    ? (
                        <BsFillMoonFill
                            size="24"
                            color="#fff"
                        />
                    )
                    : (
                        <BsFillSunFill
                            size="24"
                            color="#fff"
                        />
                    )
                }
            </div>
        </div>
    );
}

export default NavbarUtil;