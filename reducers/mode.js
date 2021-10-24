export const initialState = {
    brightMode: false,
}

export const MODE_CHANGE_REQUEST = "MODE_CHANGE_REQUEST";

export const viewModeChangeAction = data => {
    return {
        type: MODE_CHANGE_REQUEST,
        data,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MODE_CHANGE_REQUEST: {
            let data = !action.data;
            return {
                ...state,
                brightMode: data,
            }
        }
        default: {
            return { ...state, }
        }
    }
}

export default reducer;