import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }

  render() {
    const { username, password, submitted } = this.state;
    return (
      <Box display="flex" flexDirection="column"
        alignItems="center" mx={4} my={8}>
        <Avatar style={{ backgroundColor: "#f50057" }} m={1}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
            </Typography>
        <form width="100%" mt={1} onSubmit={this.handleSubmit}>
          <TextField required fullWidth autoFocus
            variant="outlined" margin="normal"
            name="username" id="username" label="Email Address"
            autoComplete="username"
            value={username}
            onChange={this.handleChange}
          />
          <TextField required fullWidth
            variant="outlined" margin="normal"
            name="password" id="password" label="Password"
            autoComplete="current-password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Box mt={3} mb={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={submitted}
            > Sign In</Button>
            {submitted && <LinearProgress />}
          </Box>
          <Grid container>
            <Grid item xs>
              <Link to="/reset" variant="body2">
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </Box>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedSignIn = connect(mapState, actionCreators)(SignIn);
export default connectedSignIn;