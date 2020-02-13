import React from 'react';
import {Route, Switch} from "react-router-dom";

import {
    LoginPage,
    RegisterPage
} from '../pages';

const authModuleRoutes = ({match}) => {
    const rootPath = match.path;

    return (
        <Switch>
            <Route path={rootPath + '/login'}           component={LoginPage} />
            <Route path={rootPath + '/register'}        component={RegisterPage} />
        </Switch>
    );
};

export default authModuleRoutes;
