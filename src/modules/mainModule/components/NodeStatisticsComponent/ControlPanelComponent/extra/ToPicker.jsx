import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from "@material-ui/pickers";
import { setPeriodTo } from "../../../../actions/nodeActions";

const ToPicker = props => (

    <KeyboardDatePicker
        maxDate={new Date()}
        minDate={props.from}
        format="yyyy-MM-dd"
        margin="normal"
        id="date-picker-to"
        label="TO"
        value={props.to && props.to}
        onChange={(event) => props.setPeriodTo(new Date(event))}
    />

);

ToPicker.propTypes = {
    to: PropTypes.instanceOf(Date),
};

const mapStateToProps = state => {
    return {
        from: state.mainStore.currentNodeStore.from,
        to: state.mainStore.currentNodeStore.to,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPeriodTo: to => dispatch(setPeriodTo(to))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ToPicker);
