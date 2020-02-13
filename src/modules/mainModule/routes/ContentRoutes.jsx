import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '../../../lib';
import {
    ClusterViewContainer,
    ClustersContainer,
    NodeStatisticsContainer,
} from '../containers';

const ContentRoutes = ({match}) => {
    return (
        <Switch>
            <PrivateRoute path={match.path + '/clusters/:clusterId/nodes/:nodeId/statistics'} component={NodeStatisticsContainer}/>
            <PrivateRoute path={match.path + '/clusters/:clusterId'} component={ClusterViewContainer}/>
            <PrivateRoute path={match.path + '/clusters'} component={ClustersContainer}/>
        </Switch>
    );
};

export default ContentRoutes;
