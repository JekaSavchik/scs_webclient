import authService from '../services/authService';

import {
    startRequestLogin,
    requestLoginSeccussful,
    requestLoginFail,
} from '../actions/loginActions';

export const sendLogin = (credentials, history, enqueueSnackbar) => {
    return dispatch => {
        dispatch(startRequestLogin());
        const service = new authService();
        service.login(credentials)
            .then(response => {
                dispatch(requestLoginSeccussful(response));
                localStorage.setItem(process.env.REACT_APP_ACCESS_TOKEN_KEY, response.data.accessToken);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                history.push('/main/clusters');
            })
            .catch(err => {
                dispatch(requestLoginFail(err));
                if (err.response) {
                    const errorMessage = err.response.data.error;
                    enqueueSnackbar(errorMessage, {variant: 'error'});
                } else {
                    enqueueSnackbar('Server is not responding...', {variant: 'error'});
                }
            });
    };
};
