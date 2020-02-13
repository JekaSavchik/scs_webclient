import {
    START_REQUEST_CLUSTERS,
    REQUEST_CLUSTERS_SUCCESSFUL,
    REQUEST_CLUSTERS_FAIL
} from '../constants/actionTypes';

const initialState = {
    clusters: [],
    loading: false,
    isError: false,
};

const clustersReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_REQUEST_CLUSTERS:
            return {
                ...state,
                loading: true,
            };

        case REQUEST_CLUSTERS_SUCCESSFUL:
            return {
                clusters: action.payload,
                loading: false,
                isError: false,
            };

        case REQUEST_CLUSTERS_FAIL:
            return {
                ...state,
                loading: false,
                isError: true,
            };

        default:
            return state;
    }
};

export default clustersReducer;
