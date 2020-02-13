import React, { Component } from 'react';
import { connect } from "react-redux";
import { withSnackbar } from 'notistack';
import { fetchClusterById } from "../thunks/clusters";
import { ClusterViewComponent } from "../components";

class ClusterViewContainer extends Component {

    componentDidMount() {
        const clusterId = this.props.match.params.clusterId;
        this.props.dispatch(fetchClusterById(clusterId, this.props.enqueueSnackbar))
    }

    render() {

        return (
            <ClusterViewComponent {...this.props}/>
        );
    }
}

export default connect()(withSnackbar(ClusterViewContainer))
