import React from 'react';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { Grid, Divider, Box, RadioGroup, Button } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import useStyles from './styles';

import {
    SpecName,
    SpecValue,
    SpecInfo,
    SpecImg,
} from '../../shared';
import {
    SwitchRTMode,
    DataMonitor,
    RadioDataType,
    FromPicker,
    ToPicker,
} from './extra';
import { setCurrentDataType } from "../../../actions/nodeActions";
import { fetchPacks } from "../../../thunks/packs";


const ControlPanelComponent = (props) => {
    const classes = useStyles();

    return (<div className={classes.root}>
        <Grid container spacing={2} justify={'center'} component={'div'}>
            <Grid item xs={12} sm={12} component={'div'}>
                <SpecInfo info={props.node && props.node.device.title}/>
            </Grid>

            <Grid item xs={12} sm={4} component={'div'}>
                <SpecImg
                    tooltipMsg={props.node && props.node.device.description}
                    image={props.node.device.image}
                />
            </Grid>
            <Grid item xs={12} sm={8} component={'div'}>
                <Grid container justify={'center'} component={'div'}>
                    <Grid item xs={6} sm={6} component={'div'}>
                        <SpecName name={'Chip'}/>
                        <SpecName name={'Host'}/>
                        <SpecName name={'Port'}/>
                        <SpecName name={'Connection'}/>

                    </Grid>
                    <Grid item xs={6} sm={6} component={'div'}>
                        <SpecValue value={props.node && props.node.device.chip}/>
                        <SpecValue value={props.node && props.node.host}/>
                        <SpecValue value={props.node && props.node.port}/>
                        <SpecValue value={props.node && props.node.connectionType.title}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        {props.node.device.deviceType.title === 'sensor' &&
            <>
                <Box my={2}><Divider component={'div'}/></Box>

                <Box my={2}><SwitchRTMode/></Box>

                <Grid container spacing={2} justify={'flex-start'} component={'div'}>
                    {props.dataTypes.map((dt, index) => {
                        return (
                            <Grid item xs={12} sm={6} component={'div'} key={index}>
                                <DataMonitor
                                    dataTitle={dt.title}
                                    dataValue={
                                        props.RTMData.length > 0 && props.RTMData.find(rtm => rtm.dataType === dt.title) ?
                                            props.RTMData.find(rtm => rtm.dataType === dt.title).value :
                                            null
                                    }
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </>
        }

        <Box my={3}><Divider component={'div'}/></Box>

        <RadioGroup
            onChange={(event) => props.setCurrentDataType(event.target.value)}
            defaultValue={props.dataTypes[0].title}
        >
            <Grid container spacing={2} justify={'flex-start'} component={'div'}>
                {props.dataTypes.map((dt, index) => {
                    return (
                        <Grid item xs={12} sm={6} component={'div'} key={index}>
                            <RadioDataType title={dt.title}/>
                        </Grid>
                    )
                })}
            </Grid>
        </RadioGroup>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={2} justify={'flex-start'} component={'div'}>
                <Grid item xs={12} sm={6} component={'div'}>
                    <FromPicker/>
                </Grid>
                <Grid item xs={12} sm={6} component={'div'}>
                    <ToPicker/>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>

        <Grid container spacing={2} justify={'flex-end'} component={'div'}>
            <Grid item xs={12} sm={12} component={'div'}>
                <Button
                    color="secondary"
                    variant={'contained'}
                    href={null}
                    disabled = {!props.currentDataType}
                    onClick={() => props.fetchPacks(props.currentNodeStore, props.enqueueSnackbar)}
                >REQUEST</Button>
            </Grid>
        </Grid>

    </div>);
};

const mapStateToProps = (state) => {
    return {
        node: state.mainStore.currentNodeStore.currentNode,
        dataTypes: state.mainStore.currentNodeStore.currentNode.device.dataTypes,
        currentDataType: state.mainStore.currentNodeStore.currentDataType,
        currentNodeStore: state.mainStore.currentNodeStore,
        RTMData: state.mainStore.RTModeStore.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentDataType: (dataType) => dispatch(setCurrentDataType(dataType)),
        fetchPacks: (currentNodeStore, enqueueSnackbar) => dispatch(fetchPacks(currentNodeStore, enqueueSnackbar)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withSnackbar(ControlPanelComponent));
