import {
    RTMFetchingStart,
    RTMFetchingSuccessful,
    RTMFetchingFail,
} from '../actions/RTModeActions';
import { RTModeService } from '../services';

export const fetchRTMData = (nodeId) => {
    return dispatch => {
        dispatch(RTMFetchingStart());
        const serviceRTM = new RTModeService();
        serviceRTM.fetchRTData(nodeId)
            .then(response => {
                dispatch(RTMFetchingSuccessful(response.data));
            })
            .catch(err => {
                dispatch(RTMFetchingFail(err));
            });
    };
};
