import {
    START_REQUEST_AUTH,
    REQUEST_LOGIN_SUCCESSFUL,
    REQUEST_REGISTR_SUCCESSFUL,
    REQUEST_AUTH_FAIL,
} from '../constants/actionTypes';

const initialState = {
    accessToken: null,
    user: null,
    loading: false,
    isError: false,
    error: null,
};

const authModuleReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_REQUEST_AUTH:
            return {
                ...state,
                loading: true,
            };

        case REQUEST_LOGIN_SUCCESSFUL:
            return {
                accessToken: action.payload.accessToken,
                user: action.payload.user,
                loading: false,
                isError: false,
            };

        case REQUEST_REGISTR_SUCCESSFUL:
            return {
                loading: false,
                isError: false,
            };

        case REQUEST_AUTH_FAIL:
            return {
                ...state,
                loading: false,
                isError: true,
                error: action.payload
            };

        default:
            return state;
    }
};

export default authModuleReducer;
