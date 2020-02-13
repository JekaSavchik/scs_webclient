import {
    START_REQUEST_AUTH,
    REQUEST_LOGIN_SUCCESSFUL,
    REQUEST_AUTH_FAIL,
} from '../constants/actionTypes';

export function startRequestLogin() {
    return {type: START_REQUEST_AUTH};
}

export function requestLoginSeccussful(data) {
    return {
        type: REQUEST_LOGIN_SUCCESSFUL,
        payload: data,
    }
}

export function requestLoginFail(err) {
    return {
        type: REQUEST_AUTH_FAIL,
        payload: err,
    }
}
