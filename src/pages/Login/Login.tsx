import { ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Copyright, LockOutlined } from "@mui/icons-material";

const Login = () => {
  return (
    <ThemeProvider theme={undefined}>
      <Container>
        <CssBaseline />

        <Box>
          <Avatar>
            <LockOutlined />
          </Avatar>

          <Typography>Sign in</Typography>

          <Box>
            <TextField></TextField>

            <TextField></TextField>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            ></FormControlLabel>

            <Button>Sign In</Button>

            <Grid container>
              <Grid item>
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
          </Box>
        </Box>

        <Copyright />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
