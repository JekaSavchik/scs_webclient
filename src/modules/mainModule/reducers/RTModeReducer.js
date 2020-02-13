import {
    RT_MODE_TOGGLE,
    RT_MODE_FETCH_DATA_START,
    RT_MODE_FETCH_DATA_SUCCESSFUL,
    RT_MODE_FETCH_DATA_FAIL,
} from '../constants/actionTypes';

const initialState = {
    RTModeEnabled: false,
    loading: false,
    fail: false,
    error: null,
    data: [],
};

const RTModeReducer = (state = initialState, action) => {
    switch(action.type) {

        case RT_MODE_TOGGLE:
            return {
                ...state,
                RTModeEnabled: !state.RTModeEnabled,
                data: !state.RTModeEnabled ? [] : state.data,
            };

        case RT_MODE_FETCH_DATA_START:
            return {
                ...state,
                loading: true,
            };

        case RT_MODE_FETCH_DATA_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        case RT_MODE_FETCH_DATA_FAIL:
            return {
                ...state,
                loading: false,
                fail: true,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default RTModeReducer;
