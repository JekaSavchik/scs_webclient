import {
    startRequestClusters,
    requestClustersFail,
    requestClustersSuccessful,
    startRequestCurrentCluster,
    requestCurrentClusterSuccessful,
} from '../actions/clustersActions';
import {
    preloaderShow,
    preloaderHide
} from "../actions/commonActions";
import {
    setCurrentDataType,
    setCurrentNode
} from "../actions/nodeActions";
import {
    packsLoadingFail,
    packsLoadingStart,
    packsLoadingSuccess
} from "../actions/packActions";

import {ClusterService} from "../services";
import { PackService } from '../services';


export const fetchClusters = (enqueueSnackbar) => {
    return dispatch => {
        dispatch(preloaderShow());
        dispatch(startRequestClusters());
        const service = new ClusterService();
        service.fetchClusters()
            .then(response => {
                dispatch(requestClustersSuccessful(response.data));
                dispatch(preloaderHide());
            })
            .catch(err => {
                dispatch(requestClustersFail());
                dispatch(preloaderHide());
                if (err.response) {
                    const errorMessage = err.response.data.error;
                    enqueueSnackbar(errorMessage, {variant: 'error'});
                } else {
                    enqueueSnackbar('Server is not responding...', {variant: 'error'});
                }
            });
    }
};

export const fetchClusterById = (clusterId, enqueueSnackbar, currentNodeId = null) => {
    return dispatch => {
        dispatch(preloaderShow());
        dispatch(startRequestCurrentCluster());
        const service = new ClusterService();
        service.fetchClusterById(clusterId)
            .then(response => {
                const cluster = response.data;
                dispatch(requestCurrentClusterSuccessful(cluster));

                if (currentNodeId) {
                    const currentNode = cluster.nodes.find(n => n.id === currentNodeId);
                    dispatch(setCurrentNode(currentNode));
                }

                dispatch(preloaderHide());
            })
            .catch(err => {
                dispatch(requestClustersFail());
                dispatch(preloaderHide());
                if (err.response) {
                    const errorMessage = err.response.data ?
                        err.response.data.error :
                        `${err.response.status} ${err.response.statusText}`;
                    enqueueSnackbar(errorMessage, {variant: 'error'});
                } else {
                    enqueueSnackbar('Server is not responding...', {variant: 'error'});
                }
            });
    };
};

export const prepareStatistics = (clusterId, nodeId, enqueueSnackbar) => {
    return dispatch => {
        const clusterService = new ClusterService();
        const packService = new PackService();

        dispatch(preloaderShow());
        dispatch(startRequestCurrentCluster());

        clusterService.fetchClusterById(clusterId)
            .then(response => {
                const cluster = response.data;
                dispatch(requestCurrentClusterSuccessful(cluster));
                const currentNode = cluster.nodes.find(n => n.id === nodeId);
                dispatch(setCurrentNode(currentNode));

                return (currentNode);
            })
            .then(currentNode => {
                dispatch(packsLoadingStart());
                const from = new Date();
                const to = new Date();
                const fromStr = from.getFullYear() + '-' + ('0' + (from.getMonth() + 1)).slice(-2) + '-' + ('0' + from.getDate()).slice(-2);
                const toStr = to.getFullYear() + '-' + ('0' + (to.getMonth() + 1)).slice(-2) + '-' + ('0' + to.getDate()).slice(-2);

                const dataType = currentNode.device.dataTypes[0].title;
                dispatch(setCurrentDataType(dataType));

                return {
                    nodeId: nodeId,
                    from: fromStr,
                    to: toStr,
                    dataType: dataType,
                };
            })
            .then(params => {
                packService.fetchPacks(params)
                    .then(response => {
                        dispatch(packsLoadingSuccess(response.data));
                        dispatch(preloaderHide());
                        if (response.data.length) {
                            enqueueSnackbar('Data uploaded', {variant: 'success'});
                        } else {
                            enqueueSnackbar('Data is empty', {variant: 'warning'});
                        }
                    })
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
