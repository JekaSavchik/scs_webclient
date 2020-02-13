import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { Switch } from "@material-ui/core";
import { commandToggleState } from "../../../../../thunks/commands";

const NodeStateSwitcher = props => (

    <Switch
        checked={props.node.isOnline}
        onChange={() => props.toggleNodeState(props.node.id, !props.node.isOnline, props.enqueueSnackbar)}
        color="secondary"
    />

);

NodeStateSwitcher.propTypes = {
    node: PropTypes.object.isRequired,
    toggleNodeState: PropTypes.func.isRequired,
};

const mapDispanchToProps = dispatch => {
    return {
        toggleNodeState: (nodeId, nodeState, enqueueSnackbar) =>
            dispatch(commandToggleState(nodeId, nodeState, enqueueSnackbar)),
    };
};

export default connect(
    null,
    mapDispanchToProps,
)(withSnackbar(NodeStateSwitcher));
