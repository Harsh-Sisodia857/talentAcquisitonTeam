import React, { useState,useContext,useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import formContext from "../Context/FormContext";

function InterviewAbilitySection() {
  const { submitData, setcurrentStep, setuserData, userData } = useContext(formContext);
  const [isFormComplete, setFormComplete] = useState(false);

  const handleChange = (event) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

   useEffect(() => {
     // Check if all fields are filled
     const areAllFieldsFilled =
       userData.location &&
       userData.interviewDate &&
       userData.interviewTime &&
       userData.timeZone &&
       userData.interviewMedium;

     // Update the completion status
     setFormComplete(areAllFieldsFilled);
   }, [userData]);

  return (
    <div className="my-10">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Location"
            fullWidth
            name="location"
            value={userData["location"]}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Interview Date"
            fullWidth
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
        <Button
          variant="contained"
          onClick={submitData}
          disabled={!isFormComplete}
          color="primary"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default InterviewAbilitySection;
