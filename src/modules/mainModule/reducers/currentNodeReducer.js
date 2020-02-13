import {
    SET_CURRENT_NODE,
    SET_CURRENT_DATA_TYPE,
    PACKS_LOADING_FAIL,
    PACKS_LOADING_START,
    PACKS_LOADING_SUCCESS,
    SET_PERIOD_FROM,
    SET_PERIOD_TO,
} from '../constants/actionTypes';

const initialState = {
    currentNode: null,
    currentDataType: null,
    from: new Date(),
    to: new Date(),
    packs: null,
    loading: false,
    isError: false,
    error: null,
};

const currentNodeReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_CURRENT_NODE:
            return {
                ...state,
                currentNode: action.payload,
            };

        case SET_CURRENT_DATA_TYPE:
            return {
                ...state,
                currentDataType: action.payload,
            };

        case SET_PERIOD_FROM:
            return {
                ...state,
                from: action.payload,
                to: action.payload,
            };

        case SET_PERIOD_TO:
            return {
                ...state,
                to: action.payload,
            };

        case PACKS_LOADING_START:
            return {
                ...state,
                loading: true,
            };

        case PACKS_LOADING_SUCCESS:
            return {
                ...state,
                packs: action.payload,
                loading: false,
                isError: false,
            };

        case PACKS_LOADING_FAIL:
            return {
                ...state,
                loading: false,
                isError: true,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default currentNodeReducer;
