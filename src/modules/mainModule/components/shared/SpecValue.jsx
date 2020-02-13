import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from "@material-ui/core/index";

const defalutValue = 'not defined';

const SpecValue = props => (
    <Typography color="textSecondary" component="div">
        <Box textAlign="right" m={1}>
            {props.value ? props.value : defalutValue}
        </Box>
    </Typography>
);

SpecValue.propTypes = {
    value: PropTypes.string,
};

export default SpecValue;
