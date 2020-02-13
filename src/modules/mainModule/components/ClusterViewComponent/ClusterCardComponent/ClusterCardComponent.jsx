import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader } from "@material-ui/core";
import useStyle from './styles';

const ClusterCardComponent = (props) => {
    const classes = useStyle();

    return (
        <Card className={classes.transparentCard}>
            <CardHeader
                classes={{
                    title: classes.cardClusterTitle,
                }}
                avatar={<img className={classes.clusterIcon} src={'/images/cluster.svg'} alt={'cluster'}/>}
                title={props.cluster &&
                <div>
                    {props.cluster.title}
                    <div className={classes.ledBox}>
                        <div className={
                            props.cluster.isActive ? classes.ledGreen : classes.ledRed
                        }/>
                    </div>
                </div>
                }
                subheader={props.cluster && props.cluster.id}
            />
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        cluster: state.mainStore.currentClusterStore.currentCluster,
    };
};

export default connect(
    mapStateToProps,
)(ClusterCardComponent);
