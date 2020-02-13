import React from 'react';
import useStyles from './useStyles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import {AccountCircle} from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";

const HeaderComponent = (props) => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        props.history.push('/auth/login');
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img className={classes.logo} src={'/images/new_logo.svg'} alt={'logo'}/>
                    <Typography variant="h6" className={classes.title}>
                        SCS
                    </Typography>

                    <div>
                        <div className={classes.accountButton}>
                            <IconButton
                                href={'#'}
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </div>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={!!anchorEl}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default HeaderComponent;
