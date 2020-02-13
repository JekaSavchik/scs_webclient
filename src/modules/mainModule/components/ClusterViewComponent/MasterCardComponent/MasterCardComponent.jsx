import React from 'react';
import { connect } from 'react-redux';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography
} from "@material-ui/core";
import useStyles from './styles';


const MasterCardComponent = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                classes={{
                    title: classes.cardMasterTitle,
                }}
                avatar={<img className={classes.masterIcon} src={'/images/master.svg'} alt={'master'}/>}
                title={props.cluster &&
                <div>
                    {props.cluster.master.controlBlock.title}
                    <div className={classes.ledBox}>
                        <div className={
                            props.cluster.isActive ? classes.ledGreen : classes.ledRed
                        }/>
                    </div>
                </div>
                }
                subheader={props.cluster && props.cluster.master.id}
            />
            <CardContent>
                <Grid container spacing={2} component={'div'}>
                    <Grid item sm={6} component={'div'}>
                        <Typography color="textSecondary" component="div">
                            <Box textAlign="left" fontWeight="fontWeightBold" m={1}>
                                Base Board
                            </Box>
                        </Typography>
                        <Typography color="textSecondary" component="div">
                            <Box textAlign="left" fontWeight="fontWeightBold" m={1}>
                                Chip
                            </Box>
                        </Typography>
                        <Typography color="textSecondary" component="div">
                            <Box textAlign="left" fontWeight="fontWeightBold" m={1}>
                                Host
                            </Box>
                        </Typography>
                        <Typography color="textSecondary" component="div">
                            <Box textAlign="left" fontWeight="fontWeightBold" m={1}>
                                Port
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item sm={6} component={'div'}>
                        <Typography color="textSecondary" component="div">
                            <Box textAlign="right" m={1}>
                                {props.cluster && props.cluster.master.controlBlock.baseBoard}
                            </Box>
                        </Typography>
                        <Typography color="textSecondary" component="div">
                            <Box textAlign="right" m={1}>
                                {props.cluster && props.cluster.master.controlBlock.chip}
                            </Box>
                        </Typography>
                        <Typography color="textSecondary" component="div">
                            <Box textAlign="right" m={1}>
                                {props.cluster && props.cluster.master.host}
                            </Box>
                        </Typography>
                        <Typography color="textSecondary" component="div">
                            <Box textAlign="right" m={1}>
                                {props.cluster && props.cluster.master.port}
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        cluster: state.mainStore.currentClusterStore.currentCluster,
    };
};

export default connect(
    mapStateToProps
)(MasterCardComponent)
