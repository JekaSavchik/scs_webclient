import {
    START_REQUEST_CLUSTERS,
    REQUEST_CLUSTERS_SUCCESSFUL,
    REQUEST_CLUSTERS_FAIL,
    START_REQUEST_CURRENT_CLUSTER,
    REQUEST_CURRENT_CLUSTER_SUCCESSFUL,
    REQUEST_CURRENT_CLUSTER_FAIL,
} from '../constants/actionTypes';

export function startRequestClusters() {
    return {type: START_REQUEST_CLUSTERS};
}

export function requestClustersSuccessful(data) {
    return {
        type: REQUEST_CLUSTERS_SUCCESSFUL,
        payload: data
    };
}

export function requestClustersFail() {
    return {type: REQUEST_CLUSTERS_FAIL};
}

export function startRequestCurrentCluster() {
    return {type: START_REQUEST_CURRENT_CLUSTER};
}

export function requestCurrentClusterSuccessful(data) {
    return {
        type: REQUEST_CURRENT_CLUSTER_SUCCESSFUL,
        payload: data
    };
}

export function requestCurrentClusterFail() {
    return {type: REQUEST_CURRENT_CLUSTER_FAIL};
}
