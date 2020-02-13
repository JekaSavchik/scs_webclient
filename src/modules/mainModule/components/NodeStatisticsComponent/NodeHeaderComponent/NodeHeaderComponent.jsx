import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader } from "@material-ui/core";
import useStyle from './styles';

const NodeHeaderComponent = (props) => {
    const classes = useStyle();

    return (
        <Card className={classes.transparentCard}>
            <CardHeader
                classes={{
                    title: classes.nodeHeaderTitle,
                }}
                avatar={
                    <img className={classes.nodeIcon} src={
                        (props.node && props.node.device.deviceType.title === 'sensor') ?
                            '/images/sensor.svg' :
                            '/images/slave.svg'
                    } alt={'node'}/>
                }
                title={props.node &&
                <div>
                    {props.node.title}
                    <div className={classes.ledBox}>
                        <div className={
                            props.node.isOnline ? classes.ledGreen : classes.ledRed
                        }/>
                    </div>
                </div>
                }
                subheader={props.node && props.node.id}
            />
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        node: state.mainStore.currentNodeStore.currentNode,
    };
};

export default connect(
    mapStateToProps,
)(NodeHeaderComponent);
