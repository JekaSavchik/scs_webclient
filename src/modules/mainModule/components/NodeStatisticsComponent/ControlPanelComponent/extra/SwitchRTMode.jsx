import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, FormControlLabel, Box, Typography } from "@material-ui/core";
import { RTModeToggle } from "../../../../actions/RTModeActions";


const SwitchRTMode = props => (

    <FormControlLabel
        control={
            <Switch
                checked={props.RTModeEnabled}
                onChange={props.toggleRTMode}
                color="secondary"
            />
        }
        label={
            <Typography color="textSecondary" component="div">
                <Box textAlign="left" fontWeight="fontWeightBold" m={1}>
                    RT MODE
                </Box>
            </Typography>
        }
    />
);

SwitchRTMode.propTypes = {
    RTModeEnabled: PropTypes.bool.isRequired,
    toggleRTMode: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        RTModeEnabled: state.mainStore.RTModeStore.RTModeEnabled,
    };
};

const mapDispanchToProps = dispatch => {
    return {
        toggleRTMode: () => dispatch(RTModeToggle()),
    };
};

export default connect(
    mapStateToProps,
    mapDispanchToProps
)(SwitchRTMode);
