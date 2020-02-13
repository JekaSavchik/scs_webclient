import React, {Component} from 'react';
import {connect} from "react-redux";
import {HeaderComponent, PreloaderComponent} from "../components";
import { ContentRoutes } from "../routes";


class MainPage extends Component {
    render() {
        return (<div>
            {this.props.preloaderVisible && <PreloaderComponent />}
            <HeaderComponent history={this.props.history}/>
            <ContentRoutes {...this.props}/>
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        preloaderVisible: state.mainStore.commonStore.preloaderVisible,
    }
};

export default connect(mapStateToProps)(MainPage);
