import {
    PRELOADER_SHOW,
    PRELOADER_HIDE,
} from '../constants/actionTypes';

const initialState = {
    preloaderVisible: false,
};

const commonReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRELOADER_SHOW:
            return {
                ...state,
                preloaderVisible: true,
            };

        case PRELOADER_HIDE:
            return {
                ...state,
                preloaderVisible: false,
            };

        default:
            return state;
    }
};

export default commonReducer;
