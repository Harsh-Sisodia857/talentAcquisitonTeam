import React, { useState,useContext } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import formContext from "../Context/FormContext";

function InterviewAbilitySection() {
  const { submitData, setcurrentStep, setuserData, userData } = useContext(formContext);

  const handleChange = (event) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="my-10">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Email"
            fullWidth
            required
            type="email"
            name="email"
            value={userData["Email"]}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Location"
            fullWidth
            required
            name="location"
            value={userData["Location"]}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Interview Date"
            fullWidth
            required
            type="date"
            name="interviewDate"
            value={userData["interviewDate"]}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Interview Time"
            fullWidth
            required
            type="time"
            name="interviewTime"
            value={userData["interviewTime"]}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            label="Time Zone"
            fullWidth
            required
            name="timeZone"
            value={userData["timeZone"] || ""}
            onChange={handleChange}
          >
            <MenuItem value="UTC-1">UTC-1</MenuItem>
            <MenuItem value="UTC+0">UTC+0</MenuItem>
            <MenuItem value="UTC+1">UTC+1</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            label="Interview Medium"
            fullWidth
            required
            name="interviewMedium"
            value={userData["interviewMedium"] || ""}
            onChange={handleChange}
          >
            <MenuItem value="In-Person">In-Person</MenuItem>
            <MenuItem value="Video Call">Video Call</MenuItem>
            <MenuItem value="Phone Call">Phone Call</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <div className="my-10 flex justify-center">
        <Button
          variant="contained"
          onClick={() => setcurrentStep(3)}
          color="secondary"
          className="btn-prev"
        >
          Prev
        </Button>
        <Button variant="contained" onClick={submitData} color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default InterviewAbilitySection;
