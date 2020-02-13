import {
    SET_CURRENT_NODE,
    SET_CURRENT_DATA_TYPE,
    SET_PERIOD_FROM,
    SET_PERIOD_TO,
    NODE_UPDATE_START,
    NODE_UPDATE_SUCCESS,
    NODE_UPDATE_FAIL,
    SET_NODE_TITLE,
} from '../constants/actionTypes';

export function setCurrentNode(node) {
    return {
        type: SET_CURRENT_NODE,
        payload: node,
    };
}

export function setCurrentDataType(dataType) {
    return {
        type: SET_CURRENT_DATA_TYPE,
        payload: dataType,
    };
}

export function setPeriodFrom(from) {
    return {
        type: SET_PERIOD_FROM,
        payload: from,
    };
}

export function setPeriodTo(to) {
    return {
        type: SET_PERIOD_TO,
        payload: to,
    };
}

export function nodeUpdateStart() {
    return {type: NODE_UPDATE_START};
}

export function nodeUpdateSuccess() {
    return {type: NODE_UPDATE_SUCCESS};
}

export function nodeUpdateFail() {
    return {type: NODE_UPDATE_FAIL}
}

export function setNodeTitle(nodeId, title) {
    return {
        type: SET_NODE_TITLE,
        payload: {
            nodeId,
            title,
        },
    }
}
