import {
    START_REQUEST_CURRENT_CLUSTER,
    REQUEST_CURRENT_CLUSTER_SUCCESSFUL,
    REQUEST_CURRENT_CLUSTER_FAIL,
    COMMAND_SET_POLLING_INTERVAL_START,
    COMMAND_SET_POLLING_INTERVAL_SUCCESS,
    COMMAND_SET_POLLING_INTERVAL_FAIL,
    SET_NODE_POLLING_INTERVAL,
    COMMAND_SET_NODE_STATE_START,
    COMMAND_SET_NODE_STATE_SUCCESS,
    COMMAND_SET_NODE_STATE_FAIL,
    SET_NODE_STATE,
    NODE_UPDATE_START,
    NODE_UPDATE_SUCCESS,
    NODE_UPDATE_FAIL,
    SET_NODE_TITLE,
} from '../constants/actionTypes';

const initialState = {
    currentCluster: null,
    loading: false,
    requesting: false,
    isError: false,
    commandExecute: false,
    commandSuccess: false,
    commandFail: false,
};

const currentClusterRuducer = (state = initialState, action) => {
    switch(action.type) {
        case START_REQUEST_CURRENT_CLUSTER:
            return {
                ...state,
                loading: true,
            };

        case REQUEST_CURRENT_CLUSTER_SUCCESSFUL:
            return {
                ...state,
                currentCluster: action.payload,
                loading: false,
                isError: false,
            };

        case REQUEST_CURRENT_CLUSTER_FAIL:
            return {
                ...state,
                loading: false,
                isError: true,
            };

        case COMMAND_SET_POLLING_INTERVAL_START:
            return {
                ...state,
                commandExecute: true
            };

        case COMMAND_SET_POLLING_INTERVAL_SUCCESS:
            return {
                ...state,
                commandExecute: false,
                commandSuccess: true,
            };

        case COMMAND_SET_POLLING_INTERVAL_FAIL:
            return {
                ...state,
                commandExecute: false,
                commandFail: true,
            };

        case SET_NODE_POLLING_INTERVAL:
            return {
                ...state,
                currentCluster: {
                    ...state.currentCluster,
                    nodes: state.currentCluster.nodes.map(node => node.id === action.payload.nodeId ?
                        {
                            ...node,
                            pollingInterval: action.payload.interval,
                        }
                        : node
                    ),
                }
            };

        case COMMAND_SET_NODE_STATE_START:
            return {
                ...state,
                commandExecute: true,
            };

        case COMMAND_SET_NODE_STATE_SUCCESS:
            return {
                ...state,
                commandExecute: false,
                commandSuccess: true,
            };

        case COMMAND_SET_NODE_STATE_FAIL:
            return {
                ...state,
                commandExecute: false,
                commandFail: true,
            };

        case SET_NODE_STATE:
            return {
                ...state,
                currentCluster: {
                    ...state.currentCluster,
                    nodes: state.currentCluster.nodes.map(node => node.id === action.payload.nodeId ?
                        {
                            ...node,
                            isOnline: action.payload.nodeState,
                        }
                        : node
                    ),
                }
            };

        case NODE_UPDATE_START:
            return {
                ...state,
                requesting: true,
            };

        case NODE_UPDATE_SUCCESS:
            return {
                ...state,
                requesting: false,
            };

        case NODE_UPDATE_FAIL:
            return {
                ...state,
                requesting: false,
                isError: true,
            };

        case SET_NODE_TITLE:
            return {
                ...state,
                currentCluster: {
                    ...state.currentCluster,
                    nodes: state.currentCluster.nodes.map(node => node.id === action.payload.nodeId ?
                        {
                            ...node,
                            title: action.payload.title,
                        }
                        : node
                    )
                }
            };




        default:
            return state;
    }
};

export default currentClusterRuducer;
