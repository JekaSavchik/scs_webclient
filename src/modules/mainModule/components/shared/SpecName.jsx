import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from "@material-ui/core/index";

const SpecName = props => (
    <Typography color="textSecondary" component="div">
        <Box textAlign="left" fontWeight="fontWeightBold" m={1}>
            {props.name}
        </Box>
    </Typography>
);

SpecName.propTypes = {
    name: PropTypes.string.isRequired,
};

export default SpecName;
