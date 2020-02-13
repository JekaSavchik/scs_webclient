import {combineReducers} from "redux";
import {authModuleReducer} from '../modules/authModule';
import {mainModuleReducer} from '../modules/mainModule';

const rootReducer = combineReducers({
    auth: authModuleReducer,
    mainStore: mainModuleReducer,
});

export default rootReducer;
