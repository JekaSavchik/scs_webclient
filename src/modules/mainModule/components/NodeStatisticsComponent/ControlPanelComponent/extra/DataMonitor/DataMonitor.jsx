import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardHeader, Box, CardContent, Typography } from "@material-ui/core/index";
import useStyles from './styles.js';
import './styles.css';


const DataMonitor = props => {
    const classes = useStyles();

    return (
        <Card className={classes.monitorCard}>
            <CardHeader
                classes={{
                    title: classes.dataTitle,
                }}
                title={props.dataTitle &&
                <Box>
                    {props.dataTitle.toUpperCase()}
                    <div className={'led-box'}>
                        <div className={
                            props.RTModeEnabled ? 'led-on' : 'led-off'
                        }/>
                    </div>
                </Box>
                }
            />
            <CardContent>
                <Typography align={'center'} color={'secondary'} variant={'h3'}>
                    {props.dataValue && props.RTModeEnabled ? props.dataValue.toFixed(2) : '--.--'}
                </Typography>
            </CardContent>
        </Card>
    );
};

DataMonitor.propTypes = {
    dataTitle: PropTypes.string.isRequired,
    dataValue: PropTypes.number,
    RTModeEnabled: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    return {
        RTModeEnabled: state.mainStore.RTModeStore.RTModeEnabled,
    };
};

export default connect(
    mapStateToProps,
)(DataMonitor);
