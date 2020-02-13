import React, {Component} from 'react';
import {RegistrationContainer} from '../containers';

class RegisterPage extends Component {
    render() {
        return (<div>
            <RegistrationContainer history={this.props.history}/>
        </div>);
    }
}

export default RegisterPage;
