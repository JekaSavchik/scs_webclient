import React, { Component } from 'react';
import LoginComponent from '../components';
import { authService } from '../services';
import { connect } from "react-redux";
import { withSnackbar } from 'notistack';
import { sendLogin } from "../thunks";

class LoginContainer extends Component {

    service = new authService();

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isEmailError: false,
            isPassError: false,
        };
    }

    handleUserInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.validationValue(name, value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        const credentials = {email, password};
        const { history } = this.props;
        this.props.dispatch(sendLogin(credentials, history, this.props.enqueueSnackbar));
    };


    validationValue(name, value) {
        switch (name) {
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
            <LoginComponent
                isEmailError={this.state.isEmailError}
                isPassError={this.state.isPassError}
                handleUserInput={this.handleUserInput}
                handleSubmit={this.handleSubmit}
                isError={this.state.isError}
            />
        </div>)
    }
};

export default connect()(withSnackbar(LoginContainer));
