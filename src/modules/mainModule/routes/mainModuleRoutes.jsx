import React from 'react';
import { Switch} from "react-router-dom";
import { PrivateRoute } from "../../../lib";
import { MainPage } from "../pages";

const mainModuleRoutes = ({match}) => {
    const rootPath = match.path;

    return (
        <Switch>
            <PrivateRoute path={rootPath} component={MainPage} />
        </Switch>
    );
};

export default mainModuleRoutes;
