import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Copyright from '../copyright';
export default class SignIn extends React.Component {
  render() {
    return (
          <Box display="flex" flexDirection="column"
            alignItems="center" mx={4} my={8}>
            <Avatar style={{ backgroundColor: "#f50057" }} m={1}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form width="100%" mt={1} noValidate>
              <TextField required fullWidth autoFocus
                variant="outlined" margin="normal"
                name="email" id="email" label="Email Address"
                autoComplete="email"
              />
              <TextField required fullWidth
                variant="outlined" margin="normal"
                name="password" id="password" label="Password"
                autoComplete="current-password"
                type="password"
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
                > Sign In</Button>
              </Box>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
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