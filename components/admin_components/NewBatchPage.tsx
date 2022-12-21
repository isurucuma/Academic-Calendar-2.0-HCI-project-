import React from "react";
import Divider from "@mui/material/Divider";
import { Box, Button, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import BasicDatePicker from "../micro_components/BasicDatePicker";

type Props = {};

function Login({}: Props) {
  return (
    <div className="mt-8 text-center max-w-[1200px] px-4 mx-auto">
      <h2 className="text-2xl">Add New Batch</h2>
      <div className="mt-2 h-1 w-full rounded-lg  bg-slate-400"></div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
          marginTop: "2rem",
        }}
        noValidate
        autoComplete="off"
      >
        <div className="mt-8">
          <TextField
            id="login_email"
            label="Batch"
            placeholder="E22"
            required
            type={"text"}
          />
        </div>
        <BasicDatePicker />
        <div className="mt-8"></div>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            alert("Batch Added");
          }}
        >
          ADD
        </Button>
      </Box>
    </div>
  );
}

export default Login;
