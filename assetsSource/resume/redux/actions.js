import {dataActions} from './actionTypes';

function getUserData () {
    return (dispatch, getState, {api}) => {
        dispatch(userDataLoad());

        return api.getUserDataJson()
            .then((data) => dispatch(userDataLoadSuccess(data)))
            .catch((error) => dispatch(userDataLoadFail(error)));
    };
}

function userDataLoad () {
    return {
        type: dataActions.USER_DATA_LOAD,
    };
}

function userDataLoadSuccess (newsList) {
    return {
        type: dataActions.USER_DATA_LOAD_SUCCESS,
        payload: {
            newsList
        },
    };
}

function userDataLoadFail (payload) {
    return {
        type: dataActions.USER_DATA_LOAD_FAIL,
        payload,
    };
}
export {
    getUserData
}