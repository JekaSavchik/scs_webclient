import {
    COMMAND_SET_POLLING_INTERVAL_START,
    COMMAND_SET_POLLING_INTERVAL_SUCCESS,
    COMMAND_SET_POLLING_INTERVAL_FAIL,
    SET_NODE_POLLING_INTERVAL,
    COMMAND_SET_NODE_STATE_START,
    COMMAND_SET_NODE_STATE_SUCCESS,
    COMMAND_SET_NODE_STATE_FAIL,
    SET_NODE_STATE,
} from '../constants/actionTypes';

export function commandSetPollingIntervalStart() {
    return {type: COMMAND_SET_POLLING_INTERVAL_START};
}

export function commandSetPollingIntervalSuccess() {
    return {type: COMMAND_SET_POLLING_INTERVAL_SUCCESS};
}

export function commandSetPollingIntervalFail() {
    return {type: COMMAND_SET_POLLING_INTERVAL_FAIL};
}

export function setNodePollingInterval(nodeId, interval) {
    return {
        type: SET_NODE_POLLING_INTERVAL,
        payload: {
            nodeId,
            interval,
        },
    };
}

export function commandSetNodeStateStart() {
    return {type: COMMAND_SET_NODE_STATE_START};
}

export function commandSetNodeStateSuccess() {
    return {type: COMMAND_SET_NODE_STATE_SUCCESS};
}

export function commandSetNodeStateFail() {
    return {type: COMMAND_SET_NODE_STATE_FAIL};
}

export function setNodeState(nodeId, nodeState) {
    return {
        type: SET_NODE_STATE,
        payload: {
            nodeId,
            nodeState,
        }
    };
}
