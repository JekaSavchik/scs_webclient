import {
    PACKS_LOADING_START,
    PACKS_LOADING_SUCCESS,
    PACKS_LOADING_FAIL,
} from '../constants/actionTypes';

export function packsLoadingStart() {
    return {type: PACKS_LOADING_START};
}

export function packsLoadingSuccess(packs) {
    return {
        type: PACKS_LOADING_SUCCESS,
        payload: packs,
    };
}

export function packsLoadingFail(err) {
    return {
        type: PACKS_LOADING_FAIL,
        payload: err,
    }
}
