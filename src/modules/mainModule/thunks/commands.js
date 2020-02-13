import {
    preloaderShow,
    preloaderHide
} from "../actions/commonActions";
import {
    commandSetPollingIntervalStart,
    commandSetPollingIntervalSuccess,
    commandSetPollingIntervalFail,
    setNodePollingInterval,
    commandSetNodeStateStart,
    commandSetNodeStateSuccess,
    commandSetNodeStateFail,
    setNodeState,
} from '../actions/commandsActions';

import {CommandService} from "../services";

export const commandSetPollingInterval = (nodeId, interval, enqueueSnackbar) => {
    return dispatch => {
        dispatch(preloaderShow());
        dispatch(commandSetPollingIntervalStart());
        const service = new CommandService();
        service.updatePollingInterval(nodeId, interval)
            .then(response => {
                if (response.status === 200) {
                    dispatch(preloaderHide());
                    dispatch(commandSetPollingIntervalSuccess());
                    dispatch(setNodePollingInterval(nodeId, interval));
                    enqueueSnackbar('Polling interval is updated', {variant: 'success'});
                } else {
                    enqueueSnackbar('Polling interval is not updated', {variant: 'warning'});
                }
            })
            .catch(err => {
                dispatch(commandSetPollingIntervalFail());
                dispatch(preloaderHide());
                if (err.response) {
                    const errorMessage = err.response.data.error;
                    enqueueSnackbar(errorMessage, {variant: 'error'});
                } else {
                    enqueueSnackbar('Server is not responding...', {variant: 'error'});
                }
            });

    };
};

export const commandToggleState = (nodeId, nodeState, enqueueSnackbar) => {
    return dispatch => {
        dispatch(preloaderShow());
        dispatch(commandSetNodeStateStart());
        const service = new CommandService();
        service.toggleState(nodeId, nodeState)
            .then(response => {
                if (response.status === 200) {
                    dispatch(preloaderHide());
                    dispatch(commandSetNodeStateSuccess());
                    dispatch(setNodeState(nodeId, nodeState));
                    enqueueSnackbar(`Node is turned ${nodeState ? 'ON' : 'OFF'}`, {variant: 'success'});
                } else {
                    enqueueSnackbar('Node has not changed its state', {variant: 'warning'});
                }
            })
            .catch(err => {
                dispatch(commandSetNodeStateFail());
                dispatch(preloaderHide());
                if (err.response && err.response.data) {
                    const errorMessage = err.response.data.error;
                    enqueueSnackbar(errorMessage, {variant: 'error'});
                } else {
                    if (err.response.status === 418) {
                        enqueueSnackbar('Node connection doesn\'t detected...', {variant: 'error'});
                    } else {
                        enqueueSnackbar('Server is not responding...', {variant: 'error'});
                    }
                }
            });
    };
};
