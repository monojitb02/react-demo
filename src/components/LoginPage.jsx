import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import bg from '../images/login-side-image.png';
import SignIn from './SignIn';
export default class LoginPage extends React.Component {
  render() {
    return (
      <Grid container component="main" style={{
        height: "100vh"
      }}>
        <CssBaseline />
        <Grid item xs={12} sm={7} md={9} style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <Grid item xs={12} sm={5} md={3} component={Paper} elevation={6} square>
          <SignIn />
        </Grid>
      </Grid >
    );
  }
}
