import {
    packsLoadingStart,
    packsLoadingSuccess,
    packsLoadingFail,
} from '../actions/packActions';
import {
    preloaderShow,
    preloaderHide
} from "../actions/commonActions";
import { PackService } from '../services';

export const fetchPacks = (currentNodeStore, enqueueSnackbar) => {
    return dispatch => {
        dispatch(preloaderShow());
        dispatch(packsLoadingStart());

        const service = new PackService();

        const from = currentNodeStore.from;
        const to = currentNodeStore.to;
        const fromStr = from.getFullYear() + '-' + ('0' + (from.getMonth() + 1)).slice(-2) + '-' + ('0' + from.getDate()).slice(-2);
        const toStr = to.getFullYear() + '-' + ('0' + (to.getMonth() + 1)).slice(-2) + '-' + ('0' + to.getDate()).slice(-2);

        const params = {
            nodeId: currentNodeStore.currentNode.id,
            from: fromStr,
            to: toStr,
            dataType: currentNodeStore.currentDataType,
        };

        service.fetchPacks(params)
            .then(response => {
                dispatch(packsLoadingSuccess(response.data));
                dispatch(preloaderHide());
                if (response.data.length) {
                    enqueueSnackbar('Data uploaded', {variant: 'success'});
                } else {
                    enqueueSnackbar('Data is empty', {variant: 'warning'});
                }

            })
            .catch(err => {
                dispatch(packsLoadingFail(err));
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
