import React, {Component} from 'react';
import {LoginContainer} from '../containers';

class LoginPage extends Component {
    render() {
        return (<div>
            <LoginContainer history={this.props.history}/>
        </div>);
    }
}

export default LoginPage;
