import React from 'react'
import { Button, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";


function BasicDetails() {
  return (
    <div>
      <div className="my-5">
        <TextField
          id="outlined-basic"
          color="secondary"
          label="Name"
          variant="outlined"
        />
      </div>
      <div className="my-5">
        <TextField
          id="outlined-basic"
          color="secondary"
          label="Email"
          variant="outlined"
        />
      </div>
      <div className="my-5">
        <TextField
          id="outlined-basic"
          color="secondary"
          label="Mobile Number"
          variant="outlined"
        />
      </div>
      <div className="my-5">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="DOB" defaultValue={dayjs("2000-01-01")} />
        </LocalizationProvider>
      </div>
      <div>
         <Button variant="contained" color="primary">Next </Button>
      </div>
    </div>
  );
}

export default BasicDetails