import React from 'react';
import PropTypes from 'prop-types';
import { CardMedia, Tooltip } from "@material-ui/core/index";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    nodeImg: {
        height: 0,
        paddingTop: '100%',
    }
}));

const SpecImg = props => {
    const classes = useStyles();

    return (
        <Tooltip title={props.tooltipMsg} placement="top-start">
            <CardMedia
                className={classes.nodeImg}
                image={props.image}
                component={'div'}
            />
        </Tooltip>
    );
};

SpecImg.propTypes = {
    tooltipMsg: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default SpecImg;
