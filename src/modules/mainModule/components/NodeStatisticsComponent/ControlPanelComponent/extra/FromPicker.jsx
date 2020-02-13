import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from "@material-ui/pickers";
import { setPeriodFrom } from "../../../../actions/nodeActions";

const FromPicker = props => (

    <KeyboardDatePicker
        maxDate={new Date()}
        format="yyyy-MM-dd"
        margin="normal"
        id="date-picker-from"
        label="FROM"
        value={props.from && props.from}
        onChange={(event) => props.setPeriodFrom(new Date(event))}
    />

);

FromPicker.propTypes = {
    from: PropTypes.instanceOf(Date),
};

const mapStateToProps = state => {
    return {
        from: state.mainStore.currentNodeStore.from,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPeriodFrom: from => dispatch(setPeriodFrom(from))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FromPicker);
