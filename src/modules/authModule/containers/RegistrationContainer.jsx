import React, { Component } from 'react';
import {RegistrationComponent} from '../components';
import { authService } from '../services';
import { connect } from "react-redux";
import { withSnackbar } from 'notistack';
import { sendRegistration } from "../thunks";

class RegistrationContainer extends Component {

    service = new authService();

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            isEmailError: false,
            isPassError: false,
            isNameError: false,
        };
    }

    handleUserInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.validationValue(name, value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, password} = this.state;
        const credentials = {name, email, password};
        const { history } = this.props;
        this.props.dispatch(sendRegistration(credentials, history, this.props.enqueueSnackbar));
    };


    validationValue(name, value) {
        switch (name) {
            case "name":
                let resultName = value.match(/^.{3,}$/,);
                this.setState({
                    ...this.state,
                    name: value,
                    isNameError: !resultName
                });
                break;
            case "email":
                let resultEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                this.setState({
                    ...this.state,
                    email: value,
                    isEmailError: !resultEmail
                });
                break;
            case "password":
                let resultPass = value.match(/^.{6,}$/,);
                this.setState({
                    ...this.state,
                    password: value,
                    isPassError: !resultPass
                });
                break;
            default:
                break;
        }
    }

    render() {
        return (<div>
            <RegistrationComponent
                isEmailError={this.state.isEmailError}
                isPassError={this.state.isPassError}
                isNameError={this.state.isNameError}
                handleUserInput={this.handleUserInput}
                handleSubmit={this.handleSubmit}
                isError={this.state.isError}
            />
        </div>)
    }
};

export default connect()(withSnackbar(RegistrationContainer));
