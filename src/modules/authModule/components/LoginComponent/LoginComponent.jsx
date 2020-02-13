import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';
import useStyles from './useStyles';
import Logo from '../Logo/Logo'
import CopyrightComponent from '../CopyrightComponent'
import {PreloaderComponent} from "../PreloaderComponent";
import {connect} from "react-redux";


const LoginComponent = (props) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.body}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Card className={classes.card}>
                        <Logo/>
                        <CardContent>
                            <form className={classes.form} noValidate>
                                <TextField
                                    className={classes.textField}
                                    variant="standard"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    type={'email'}
                                    autoFocus
                                    onChange={props.handleUserInput}
                                    error={props.isEmailError}
                                />
                                <TextField
                                    className={classes.textField}
                                    variant="standard"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={props.handleUserInput}
                                    error={props.isPassError}
                                />
                                <Button
                                    href={'#'}
                                    fullWidth
                                    color="primary"
                                    className={classes.submit}
                                    disabled={props.isEmailError || props.isPassError}
                                    onClick={props.handleSubmit}
                                >
                                    Login
                                </Button>
                                <Grid container>
                                    <Grid item xs></Grid>
                                    <Grid item>
                                        <Link href="/auth/register" variant="body2" className={classes.linkRegister}>
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Container>
                <div className={classes.footer}>
                    <CopyrightComponent />
                </div>

            </div>

            {props.loading &&
                <PreloaderComponent/>
            }
        </div>);
};

LoginComponent.propTypes = {
  handleSubmit:     PropTypes.func.isRequired,
  handleUserInput:  PropTypes.func.isRequired,
  isEmailError:     PropTypes.bool.isRequired,
  isPassError:      PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
    }
};

export default connect(
    mapStateToProps
)(LoginComponent);
