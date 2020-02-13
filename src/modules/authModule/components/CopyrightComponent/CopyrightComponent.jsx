import React from 'react'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


function CopyrightComponent() {
    return (
    <div className={'copyright'}>
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Sensors control system
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </div>);
};

export default CopyrightComponent;
