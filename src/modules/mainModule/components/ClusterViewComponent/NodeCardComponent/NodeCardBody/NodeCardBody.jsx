import React from 'react';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import PropsTypes from 'prop-types';
import {
    Grid,
    Chip,
    Box,
    Divider,
    Button
} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import TimelineIcon from '@material-ui/icons/Timeline';
import {
    SpecImg,
    SpecName,
    SpecValue,
} from '../../../shared';
import {
    PollingIntervalSetter,
    NodeStateSwitcher,
    PinNumberInput,
    NodeTitleInput,
} from "./extra";
import useStyles from './styles';
import { updateNode } from "../../../../thunks/nodes";

const NodeCardBody = props => {

    const classes = useStyles();

    const [pin, setPin] = React.useState(props.node.pin);
    const [title, setTitle] = React.useState(props.node.title);

    const currentPath = props.history.location.pathname;

    const onChangePinNumber = event => {
        setPin(parseInt(event.target.value));
    };

    const onChangeTitle = event => {
        setTitle(event.target.value);
    };

    return(<div className={classes.root}>

        <Grid container spacing={2} justify={'center'} component={'div'}>

            {/*Specs*/}
            <Grid item xs={12} sm={3} component={'div'}>
                <SpecImg
                    tooltipMsg={props.node.device.description}
                    image={props.node.device.image}
                />
            </Grid>
            <Grid item xs={12} sm={9} component={'div'}>
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

            {/*Data types*/}
            <Grid item xs={12} sm={6} component={'div'}>
                <SpecName name={'Data types'}/>
            </Grid>
            <Grid item xs={12} sm={6} component={'div'}>
                <Box textAlign="right" m={1}>
                    {props.node.device.dataTypes.map((dt, index) => (
                        <Chip
                            className={classes.chip}
                            key={index}
                            variant="outlined"
                            size="small"
                            label={dt.title.toUpperCase()}
                            color="secondary"
                        />
                    ))}
                </Box>
            </Grid>
        </Grid>

        <Box my={1} mx={2}><Divider component={'div'}/></Box>

        {/*Polling interval setter*/}
        <Grid container spacing={2} justify={'center'} component={'div'}>
            <Grid item xs={6} sm={4} component={'div'}>
                <SpecName name={'Polling interval'}/>
            </Grid>
            <Grid item xs={6} sm={8} component={'div'}>
                <Box mr={1} textAlign="right" component={'div'}>
                    <PollingIntervalSetter node={props.node}/>
                </Box>

            </Grid>
        </Grid>

        {/*Node state switcher*/}
        <Grid container spacing={2} justify={'center'} component={'div'}>
            <Grid item xs={6} sm={4} component={'div'}>
                <SpecName name={'STATE'}/>
            </Grid>
            <Grid item xs={6} sm={8} component={'div'}>
                <Box textAlign="right" component={'div'}>
                    <NodeStateSwitcher node={props.node}/>
                </Box>
            </Grid>
        </Grid>

        <Box my={1} mx={2}><Divider component={'div'}/></Box>

        {/*Node title*/}
        <Grid container spacing={2} justify={'center'} component={'div'}>
            <Grid item xs={6} sm={4} component={'div'}>
                <SpecName name={'Title'}/>
            </Grid>
            <Grid item xs={6} sm={8} component={'div'}>
                <Box textAlign="right" component={'div'} mr={1}>
                    <NodeTitleInput nodeTitle={title} disabled={!props.node.isOnline} onChangeTitle={onChangeTitle}/>
                </Box>
            </Grid>
        </Grid>

        {/*Pin number*/}
        <Grid container spacing={2} justify={'center'} component={'div'}>
            <Grid item xs={6} sm={10} component={'div'}>
                <SpecName name={'Control block PIN'}/>
            </Grid>
            <Grid item xs={6} sm={2} component={'div'}>
                <Box textAlign="right" component={'div'} mr={1}>
                    <PinNumberInput pinNumber={pin} disabled={!props.node.isOnline} onChangePinNumber = {onChangePinNumber}/>
                </Box>
            </Grid>
        </Grid>

        {/*Buttons*/}
        <div className={classes.actionButtons}>
            <Button
                href={null}
                disabled={!props.node.isOnline}
                color={'secondary'}
                variant={'outlined'}
                alt={'statistics'}
                onClick={() => props.history.push(`${currentPath}/nodes/${props.node.id}/statistics`)}
                startIcon={<TimelineIcon/>}
            >
                STATISTICS
            </Button>
            <Button
                href={null}
                disabled={!props.node.isOnline}
                color={'secondary'}
                variant={'outlined'}
                alt={'save'}
                onClick={() =>  props.updateNode(props.node.id, title, props.enqueueSnackbar)}
                startIcon={<SaveIcon/>}
            >
                SAVE
            </Button>
        </div>
    </div>);
};

NodeCardBody.propTypes = {
    node: PropsTypes.object.isRequired,
    updateNode: PropsTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        updateNode: (nodeId, title, enqueueSnackbar) => dispatch(updateNode(nodeId, title, enqueueSnackbar))
    }
};

export default connect(
    null,
    mapDispatchToProps,
)(withSnackbar(NodeCardBody));
