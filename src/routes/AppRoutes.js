import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import {PrivateRoute} from '../lib';

import {authModuleRoutes} from '../modules/authModule';
import {mainModuleRoutes} from "../modules/mainModule";



const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute           path={'/main'}      component={mainModuleRoutes} />
            <Route                  path={'/auth'}      component={authModuleRoutes} />
            <PrivateRoute           path={'/admin'}     component={() => {return (<p>adminPage</p>)}} />{/*change to admin module routes*/}
            <PrivateRoute           path={'/'}          component={() => {return (<Redirect to={'/main/clusters'}/>)}} />
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;
