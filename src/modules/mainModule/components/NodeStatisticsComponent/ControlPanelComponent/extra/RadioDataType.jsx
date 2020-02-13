import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormControlLabel, Radio, Typography } from "@material-ui/core";

const RadioDataType = props => (

    <FormControlLabel
        value={props.title}
        control={
            <Radio
                color="secondary"
            />
        }
        label={
            <Typography color="secondary" component="div">
                <Box textAlign="left" fontWeight="fontWeightBold" m={1}>
                    {props.title.toUpperCase()}
                </Box>
            </Typography>
        }
    />
);

RadioDataType.propTypes = {
    title: PropTypes.string.isRequired,
};

export default RadioDataType;
