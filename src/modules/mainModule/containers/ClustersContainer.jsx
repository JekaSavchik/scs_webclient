import React, { Component } from 'react';
import { connect } from "react-redux";
import { withSnackbar } from 'notistack';
import { ClustersListComponent } from '../components'
import { fetchClusters } from "../thunks/clusters";

class ClustersContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchClusters(this.props.enqueueSnackbar));
    }

    render() {
        return (
            <div>
                <ClustersListComponent/>
            </div>);
    }
}

export default connect()(withSnackbar(ClustersContainer))
