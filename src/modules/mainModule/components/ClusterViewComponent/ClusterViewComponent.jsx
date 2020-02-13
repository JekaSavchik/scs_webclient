import React from 'react';
import { connect } from 'react-redux';
import { Grid, Divider } from '@material-ui/core';
import useStyle from './useStyles';
import ClusterCardComponent from "./ClusterCardComponent";
import MasterCardComponent from "./MasterCardComponent";
import ListSubheader from "@material-ui/core/ListSubheader";
import NodeCardComponent from "./NodeCardComponent";

const ClusterViewComponent = (props) => {
    const classes = useStyle();

    return (<div className={classes.root}>
        {props.cluster &&
        <Grid container spacing={3} justify="center" component={'div'}>
            <Grid item xs={12} sm={8} md={8} lg={8} component={'div'}>
                <ClusterCardComponent/>
                <Divider/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} component={'div'}>
                <ListSubheader className={classes.listSubHeader} color={'primary'} disableSticky={true}>
                    Master control block
                </ListSubheader>
                <MasterCardComponent/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} component={'div'}>
                <ListSubheader className={classes.listSubHeader} color={'primary'} disableSticky={true}>
                    Nodes
                </ListSubheader>
                {props.cluster.nodes.length > 0 && props.cluster.nodes.map((node, index) => (
                    <NodeCardComponent {...props} node = {node} key={index}/>
                ))}
            </Grid>
        </Grid>
        }
    </div>);
};

const mapStateToProps = (state) => {
    return {
        cluster: state.mainStore.currentClusterStore.currentCluster,
    };
};

export default connect(
    mapStateToProps
)(ClusterViewComponent);
