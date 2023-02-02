import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LoginBox } from "../styled";

function Login() {
  return (
    <LoginBox>
      <h3>Login</h3>
      <TextField
        id="outlined-basic"
        size="small"
        label="Username"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        size="small"
        label="Password"
        variant="outlined"
      />
      <Button variant="contained">Log in</Button>
    </LoginBox>
  );
}

export default Login;
