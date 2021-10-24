import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import mode from './mode';

const rootReducer = (state = {}, action) => {
    switch (action.type){
        case HYDRATE:
            return action.payload;
        default:{
            const combineReducer = combineReducers({
                mode,
            })
            return combineReducer(state, action);
        }
    }
}

export default rootReducer;