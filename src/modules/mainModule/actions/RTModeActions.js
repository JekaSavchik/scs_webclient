import {
    RT_MODE_TOGGLE,
    RT_MODE_FETCH_DATA_START,
    RT_MODE_FETCH_DATA_SUCCESSFUL,
    RT_MODE_FETCH_DATA_FAIL,
} from '../constants/actionTypes';

export function RTModeToggle() {
    return {type: RT_MODE_TOGGLE};
}

export function RTMFetchingStart() {
    return {type: RT_MODE_FETCH_DATA_START};
}

export function RTMFetchingSuccessful(RTMData) {
    return {
        type: RT_MODE_FETCH_DATA_SUCCESSFUL,
        payload: RTMData
    };
}

export function RTMFetchingFail(err) {
    return {
        type: RT_MODE_FETCH_DATA_FAIL,
        payload: err,
    }
}
