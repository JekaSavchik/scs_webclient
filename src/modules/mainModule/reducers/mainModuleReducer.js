import { combineReducers } from "redux";

import clustersReducer from './clsutersReducer';
import commonReducer from './commonReducer';
import currentClusterRuducer from './currentClusterReducer';
import currentNodeReducer from './currentNodeReducer';
import RTModeReducer from './RTModeReducer';

const mainModuleReducer = combineReducers({
    commonStore:            commonReducer,
    clustersStore:          clustersReducer,
    currentClusterStore:    currentClusterRuducer,
    currentNodeStore:       currentNodeReducer,
    RTModeStore:            RTModeReducer,
});

export default mainModuleReducer;
