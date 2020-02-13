import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { Box, Typography, withStyles, Grid } from "@material-ui/core";
import { withSnackbar } from 'notistack';
import { commandSetPollingInterval } from "../../../../../thunks/commands";

const marks = [
    {
        num: 1,
        value: 60000,
        label: '1 min',
    },
    {
        num: 2,
        value: 180000,
        label: '3 min',
    },
    {
        num: 3,
        value: 300000,
        label: '5 min',
    },
    {
        num: 4,
        value: 600000,
        label: '10 min',
    },
    {
        num: 5,
        value: 1800000,
        label: '30 min',
    },
    {
        num: 6,
        value: 3600000,
        label: '60 min',
    },
];

const StyledRating = withStyles({
    iconFilled: {
        color: '#7800ab',
    },
})(Rating);

const getNumByValue = value => {
    const mark = marks.find(m => m.value === value);
    return mark ? mark.num : 0;
};

const getValueByNum = num => {
    const mark = marks.find(m => m.num === parseInt(num));
    return mark ? mark.value : 0;
};

const getLabelByValue = value => {
    const mark = marks.find(m => m.value === parseInt(value));
    return mark ? mark.label : '';
};

const getLabelByNum = num => {
    const mark = marks.find(m => m.num === parseInt(num));
    return mark ? mark.label : '';
};


const PollingIntervalSetter = props => {

    const [hover, setHover] = React.useState(-1);

    return (

        <Grid container spacing={2} component={'div'}>

            <Grid item xs={12} sm={6} md={8} component={'div'}>
                <Typography color="secondary" component="div">
                    <Box mt={1} textAlign="right" fontWeight="fontWeightBold">
                        {hover > 0 ? getLabelByNum(hover) : getLabelByValue(props.node.pollingInterval)}
                    </Box>
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} component={'div'}>
                <Box mt={1} textAlign="right">
                    <StyledRating
                        disabled={!props.node.isOnline}
                        name={'polling-interval-setter'}
                        value={getNumByValue(props.node.pollingInterval)}
                        icon={<QueryBuilderIcon fontSize="inherit"/>}
                        color={'secondary'}
                        max={marks.length}
                        onChange={e => {
                            const value = getValueByNum(e.target.value);
                            if (value && value !== props.node.pollingInterval)
                                props.commandSetPollingInterval(props.node.id, value, props.enqueueSnackbar);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                    />
                </Box>
            </Grid>

        </Grid>

    );
};

PollingIntervalSetter.propTypes = {
    node: PropTypes.object.isRequired,
    commandSetPollingInterval: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        commandSetPollingInterval: (nodeId, interval, enqueueSnackbar) =>
            dispatch(commandSetPollingInterval(nodeId, interval, enqueueSnackbar)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(withSnackbar(PollingIntervalSetter));
