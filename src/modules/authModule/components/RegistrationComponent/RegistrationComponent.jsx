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
import { PreloaderComponent } from "../PreloaderComponent";
import { connect } from "react-redux";


const RegistrationComponent = (props) => {
  const classes = useStyles();

  return (<div>
    <div className={classes.body}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card className={classes.card}>
          <Logo />
          <CardContent>
            <form className={classes.form} noValidate>
              <TextField
                className={classes.textField}
                autoComplete="name"
                name="name"
                margin="none"
                variant="standard"
                type="text"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={props.handleUserInput}
                error={props.isNameError}
              />
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
                autoComplete="email"
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
                autoComplete="current-password"
                onChange={props.handleUserInput}
                error={props.isPassError}
              />

              <Button
                href={'#'}
                fullWidth
                color="primary"
                className={classes.submit}
                disabled={props.isEmailError || props.isPassError || props.isNameError}
                onClick={props.handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/auth/login" variant="body2" className={classes.linkRegister}>
                    {"Already have an account? Sign in"}
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
      <PreloaderComponent />
    }
  </div>);
};

RegistrationComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUserInput: PropTypes.func.isRequired,
  isEmailError: PropTypes.bool.isRequired,
  isPassError: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
  }
};

export default connect(
  mapStateToProps
)(RegistrationComponent);
