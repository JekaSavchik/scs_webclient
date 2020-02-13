import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from "@material-ui/core/index";

const SpecInfo = props => (
    <Typography color="textSecondary" component="div">
        <Box textAlign="left" fontWeight="fontWeightBold" m={1}>
            {props.info}
        </Box>
    </Typography>
);

SpecInfo.propTypes = {
    info: PropTypes.string.isRequired,
};

export default SpecInfo;
