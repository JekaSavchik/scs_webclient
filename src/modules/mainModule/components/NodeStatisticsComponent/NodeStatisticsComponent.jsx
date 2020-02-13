import React from 'react';
import { connect } from 'react-redux';
import useStyles from './styles';
import NodeHeaderComponent from './NodeHeaderComponent';
import { Grid, Divider } from '@material-ui/core';
import ChartComponent from "./ChartComponent";
import ControlPanelComponent from "./ControlPanelComponent";

const NodeStatisticsComponent = (props) => {
    const classes = useStyles();

    return (<div className={classes.root}>
        {props.node &&
        <Grid container spacing={2} justify={'center'} component={'div'}>
            <Grid item xs={12} sm={8} component={'div'}>
                <NodeHeaderComponent/>
                <Divider component={'div'}/>
            </Grid>
            <Grid item xs={12} sm={12} md={8} component={'div'}>
                <ChartComponent/>
            </Grid>
            <Grid item xs={12} sm={12} md={4} component={'div'}>
                <ControlPanelComponent/>
            </Grid>
        </Grid>
        }

    </div>);
};

const mapStateToProps = (state) => {
    return {
        node: state.mainStore.currentNodeStore.currentNode,
    };
};

export default connect(
    mapStateToProps,
)(NodeStatisticsComponent);
