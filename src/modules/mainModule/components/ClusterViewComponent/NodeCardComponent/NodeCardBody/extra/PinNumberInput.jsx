import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import PropTypes from 'prop-types';

const styles = () => ({
    textField: {
        fontWeight: 700,
    },
    input: {
        textAlign: 'center',
        color: '#7800ab',
        min: 1,
    }
});

const PinNumberInput = props => {

    const { classes } = props;

    return (
        <TextField
            id={'pinNumber'}
            disabled={props.disabled}
            className={classes.textField}
            type={'number'}
            defaultValue={props.pinNumber}
            onChange={event => props.onChangePinNumber(event)}
            inputProps={{
                className: classes.input,
            }}
        />
    );
};

PinNumberInput.propTypes = {
    pinNumber: PropTypes.number.isRequired,
    disabled: PropTypes.bool,
    onChangePinNumber: PropTypes.func.isRequired,
};

export default withStyles(styles)(PinNumberInput);
