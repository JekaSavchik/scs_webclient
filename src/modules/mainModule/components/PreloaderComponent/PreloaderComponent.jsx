import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import './preloaderComponent.css';

const PreloaderComponent = () => {
    return (<div className={'preloader'}>
        <CircularProgress />
    </div>);
};

export default PreloaderComponent;
