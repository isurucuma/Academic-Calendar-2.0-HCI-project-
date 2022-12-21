import React from "react";
import Divider from "@mui/material/Divider";
import { Box, Button, TextField } from "@mui/material";

type Props = {};

function Login({}: Props) {
  return (
    <div className="mt-8 text-center max-w-[1200px] px-4 mx-auto">
      <h2 className="text-2xl">Admin Login Area</h2>
      <div className="mt-2 h-1 w-full rounded-lg bg-slate-400"></div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="mt-8">
          <TextField
            id="login_email"
            label="Email"
            placeholder="yourname@eng.jfn.ac.lk"
            required
            type={"email"}
          />
        </div>
        <div className="mt-2">
          <TextField
            id="login_password"
            label="Password"
            placeholder="Password"
            required
            type={"password"}
          />
        </div>
        <Button variant="outlined" color="primary">
          LOGIN
        </Button>
      </Box>
    </div>
  );
}

export default Login;
