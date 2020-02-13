import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NodeStatisticsComponent } from '../components';
import { withSnackbar } from 'notistack';
import { prepareStatistics } from "../thunks/clusters";
import { fetchRTMData } from "../thunks/RTM";
import { RTModeToggle } from "../actions/RTModeActions";

class NodeStatisticsContainer extends Component {

    RTModeInterval = 3000;
    stopInterval = 30000;
    RTMtimer = null;
    stopTimeout = null;

    componentDidMount() {

        const clusterId = this.props.match.params.clusterId;
        const nodeId = this.props.match.params.nodeId;

        this.props.dispatch(prepareStatistics(clusterId, nodeId, this.props.enqueueSnackbar));

        this.timerRTMStart();
    }

    timerRTMStart() {
        if (this.props.RTMEnabled && !this.stopTimeout) {
            this.stopTimeout = setTimeout(() => {
                this.props.dispatch(RTModeToggle());
                clearTimeout(this.stopTimeout);
            }, this.stopInterval)
        }
        this.RTMtimer = setInterval(() => {
            if (this.props.RTMEnabled) {
                if (!this.stopTimeout) {
                    this.stopTimeout = setTimeout(() => {
                        if (this.props.RTMEnabled) {
                            this.props.dispatch(RTModeToggle());
                        }
                            clearTimeout(this.stopTimeout);
                            this.stopTimeout = null;
                    }, this.stopInterval)
                }
                this.props.dispatch(fetchRTMData(this.props.node.id));
            }
        }, this.RTModeInterval);
    }

    timerRTMStop() {
        clearInterval(this.RTMtimer);
        this.RTMtimer = null;
        clearTimeout(this.stopTimeout);
        this.stopTimeout = null;
    }

    componentWillUnmount() {
        this.timerRTMStop();
    }

    render() {
        return (
            <NodeStatisticsComponent/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cluster: state.mainStore.currentClusterStore.currentCluster,
        node: state.mainStore.currentNodeStore.currentNode,
        RTMEnabled: state.mainStore.RTModeStore.RTModeEnabled,
    };
};

export default connect(
    mapStateToProps,
)(withSnackbar(NodeStatisticsContainer));
