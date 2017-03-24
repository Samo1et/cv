import {dataActions} from './actionTypes';

const initialState = {
    isDataLoad: false,
    userData: [],
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case dataActions.USER_DATA_LOAD:
            return {
                ...state,
                isDataLoad: true,
            };

        case dataActions.USER_DATA_LOAD_SUCCESS:
            return {
                ...state,
                isDataLoad: false,
                userData: action.payload,
            };

        case dataActions.USER_DATA_LOAD_FAIL:
            return {
                ...state,
                isDataLoad: false,
            };

        default:
            return state;
    }
}

export default reducer;