import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const accessTokenKey = process.env.REACT_APP_ACCESS_TOKEN_KEY;
const redirectTo = process.env.REACT_APP_REDIRECT_UNAUTH;

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render = {props =>
            localStorage.getItem(accessTokenKey) ? (
                <Component {...props}/>
            ) : (
                <Redirect
                    to={{
                        pathname: redirectTo,
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;
