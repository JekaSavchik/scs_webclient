import React from 'react';
import {
    Card,
    CardActionArea,
    Collapse,
    Divider,
    Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';
import NodeCardHeader from "./NodeCardHeader";
import NodeCardBody from './NodeCardBody';

const NodeCardComponent = props => {

    const [expanded, setExpanded] = React.useState(false);

    const classes = useStyles();

    const handleHeaderClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardActionArea href={null} onClick={handleHeaderClick}>
                <NodeCardHeader node={props.node}/>
            </CardActionArea>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box my={1} mx={2}><Divider component={'div'}/></Box>
                <NodeCardBody history={props.history} node={props.node}/>
            </Collapse>
        </Card>
    );
};


NodeCardComponent.porpTypes = {
    node: PropTypes.object.isRequired,
};

export default NodeCardComponent;
