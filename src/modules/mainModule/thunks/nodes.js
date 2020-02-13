import {
    preloaderShow,
    preloaderHide
} from "../actions/commonActions";
import {
    nodeUpdateStart,
    nodeUpdateSuccess,
    nodeUpdateFail,
    setNodeTitle,
} from '../actions/nodeActions';
import { NodeService } from '../services';

export const updateNode = (nodeId, title, enqueueSnackbar) => {
    return dispatch => {
        dispatch(preloaderShow());
        dispatch(nodeUpdateStart());
        const service = new NodeService();
        service.updateNode(nodeId, title)
            .then(response => {
                if (response.status === 204) {
                    dispatch(preloaderHide());
                    dispatch(nodeUpdateSuccess());
                    dispatch(setNodeTitle(nodeId, title));
                    enqueueSnackbar('Node is updated', {variant: 'success'});
                } else {
                    enqueueSnackbar('Node is not updated', {variant: 'warning'});
                }
            })
            .catch(err => {
                dispatch(nodeUpdateFail());
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
