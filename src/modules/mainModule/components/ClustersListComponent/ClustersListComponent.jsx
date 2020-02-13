import React from 'react';
import {connect} from "react-redux";
import useStyle from './useStyle';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withRouter } from 'react-router-dom';


const ClustersListComponent = (props) => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <List component={'nav'} className={classes.list}>
                <ListSubheader className={classes.listSubHeader} color={'primary'}>
                    Your clusters
                </ListSubheader>
                {props.clusters.length > 0 && props.clusters.map((cluster, index) => {
                    return (
                        <div key={index}>
                            <ListItem component={'button'} button>
                                <img className={classes.clusterIcon} src={'/images/cluster.svg'} alt={'cluster'}/>
                                <ListItemText
                                    primary={cluster.title}
                                    onClick={() => {props.history.push(`clusters/${cluster.id}`);}}
                                />
                                <div className={classes.ledBox}>
                                    <div className={
                                        cluster.isActive ? classes.ledGreen : classes.ledRed
                                    }/>
                                </div>
                            </ListItem>
                            <Divider component={'div'}/>
                        </div>
                    )
                })}
            </List>
        </div>);
};

const mapStateToProps = state => {
    return {
        clusters: state.mainStore.clustersStore.clusters,
    }
};

export default connect(
    mapStateToProps,
)(withRouter(ClustersListComponent));
