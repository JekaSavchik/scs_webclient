import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import PropTypes from 'prop-types';

const styles = () => ({
    textField: {
        fontWeight: 700,
    },
    input: {
        textAlign: 'right',
        color: '#7800ab',
    }
});

const NodeTitleInput = props => {

    const { classes } = props;

    return (
        <TextField
            id={'nodeTitle'}
            disabled={props.disabled}
            className={classes.textField}
            defaultValue={props.nodeTitle}
            onChange={event => props.onChangeTitle(event)}
            inputProps={{
                className: classes.input,
            }}
        />
    );
};

NodeTitleInput.propTypes = {
    nodeTitle: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChangeTitle: PropTypes.func.isRequired,
};

export default withStyles(styles)(NodeTitleInput);

