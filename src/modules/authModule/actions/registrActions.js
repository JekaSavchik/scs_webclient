import {
    START_REQUEST_AUTH,
    REQUEST_REGISTR_SUCCESSFUL,
    REQUEST_AUTH_FAIL,
} from '../constants/actionTypes';

export function startRequestRegistr() {
    return {type: START_REQUEST_AUTH};
}

export function requestRegistrSeccussful() {
    return {
        type: REQUEST_REGISTR_SUCCESSFUL,
    }
}

export function requestRegistrFail(err) {
    return {
        type: REQUEST_AUTH_FAIL,
        payload: err,
    }
}
