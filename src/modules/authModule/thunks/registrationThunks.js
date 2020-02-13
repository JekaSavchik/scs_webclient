import authService from '../services/authService';

import {
    startRequestRegistr,
    requestRegistrSeccussful,
    requestRegistrFail,
} from '../actions/registrActions';

export const sendRegistration = (credentials, history, enqueueSnackbar) => {
    return dispatch => {
        dispatch(startRequestRegistr());
        const service = new authService();
        service.register(credentials)
            .then(response => {
                dispatch(requestRegistrSeccussful(response));
                localStorage.setItem(process.env.REACT_APP_ACCESS_TOKEN_KEY, response.data.accessToken);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                history.push('/auth/login');
            })
            .catch(err => {
                dispatch(requestRegistrFail(err));
                if (err.response) {
                    const errorMessage = err.response.data.error;
                    enqueueSnackbar(errorMessage, {variant: 'error'});
                } else {
                    enqueueSnackbar('Server is not responding...', {variant: 'error'});
                }
            });
    };
};
