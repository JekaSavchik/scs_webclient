import React from 'react';
import {
    CardHeader,
    Box,
    Typography,
    Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';

const NodeCardHeader = props => {
    const classes = useStyles();

    return (

        <CardHeader
            classes={{
                title: classes.cardNodeTitle,
            }}
            avatar={
                <Tooltip title={props.node.device.description} placement="top-start">
                    <img className={classes.nodeIcon} src={
                        (props.node.device.deviceType.title === 'sensor') ?
                            '/images/sensor.svg' :
                            '/images/slave.svg'
                    }
                         alt={'node'}/>
                </Tooltip>
            }
            title={
                <div>
                    {props.node.title}
                    <div className={classes.ledBox}>
                        <div className={
                            props.node.isOnline ? classes.ledGreen : classes.ledRed
                        }/>
                    </div>
                </div>
            }
            subheader={
                <div>
                    <Typography color="textSecondary" component="div" className={classes.subheader}>
                        <Box textAlign="left">
                            {props.node.id}
                        </Box>
                    </Typography>
                    <Typography color="secondary" component="div">
                        <Box textAlign="left" fontWeight="fontWeightBold">
                            {props.node.device.deviceType.title.toLowerCase()}
                        </Box>
                    </Typography>
                </div>

            }
        />

    );
};

NodeCardHeader.propTypes = {
    node: PropTypes.object.isRequired,
};

export default NodeCardHeader;
