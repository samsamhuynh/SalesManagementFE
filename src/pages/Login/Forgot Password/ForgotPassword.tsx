import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { LOGIN_PAGE } from "../../../constants";
import { LockOutlined } from "@mui/icons-material";
import { FormEvent } from "react";

const ForgotPassword = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "Left",
        }}
      >
        <Avatar sx={{ m: "30px 1px", bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>

        <Typography variant="h5">Forgot Password?</Typography>

        <Typography color="gray" marginTop={2} variant="subtitle1">
          Enter your email and we'll send you instructions to reset your
          password
        </Typography>

        <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 3 }}>
          <TextField
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            required
            autoFocus
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Reset Password
          </Button>

          <Grid container>
            <Grid item>
              <Link href={LOGIN_PAGE} variant="body2">
                {"Remember your password?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
