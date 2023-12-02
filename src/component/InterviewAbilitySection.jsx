import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import formContext from "../Context/FormContext";

function InterviewAbilitySection() {
  const { submitData, setcurrentStep, setuserData, userData } =
    useContext(formContext);
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
    <div className="my-10" style={{ margin: "55px 207px", height: "100%" }}>
      <div className="py-4">
        <p className="font-semibold text-lg">Preview</p>
        <p className="pb-1 pr-2">
          You will be able to customize the fiels in the later stage
        </p>
      </div>
      <div className="box flex flex-col gap-2 pl-8 pt-8 pb-7 bg-blue-100 ">
        <h1 className="font-normal text-2xl">Name Of The Enquiry Form</h1>
        <p className="mb-5">One Line description of the Form</p>
        <div>Provide the following information to process your application</div>
      </div>
      <div className="bg-white p-[20px]">
        <div className="m-auto w-[50%]" style={{ margin: "80px auto" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className="flex flex-col">
                <div style={{ padding: "2px 0px", fontSize: "17px" }}>
                  1. Email*
                </div>
                <div>
                  <TextField
                    id="fullWidth"
                    color="secondary"
                    label="Name"
                    name="Name"
                    value={userData["Email"]}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="flex flex-col">
                <div style={{ padding: "2px 0px", fontSize: "17px" }}>
                  2. Location
                </div>
                <div>
                  <TextField
                    label="Location"
                    fullWidth
                    name="location"
                    value={userData["location"]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="flex flex-col">
                <div style={{ padding: "2px 0px", fontSize: "17px" }}>
                  3. Interview Date
                </div>
                <div>
                  <TextField
                    label="Interview Date"
                    fullWidth
                    type="date"
                    name="interviewDate"
                    value={userData["interviewDate"]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="flex flex-col">
                <div style={{ padding: "2px 0px", fontSize: "17px" }}>
                  4. Interview Time
                </div>
                <div>
                  <TextField
                    label="Interview Time"
                    fullWidth
                    type="time"
                    name="interviewTime"
                    value={userData["interviewTime"]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="flex flex-col">
                <div style={{ padding: "2px 0px", fontSize: "17px" }}>
                  5. Time Zone
                </div>
                <div>
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
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="flex flex-col">
                <div style={{ padding: "2px 0px", fontSize: "17px" }}>
                  6. Interview Medium
                </div>
                <div>
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
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div
        className="w-full bg-white m-[11px 0px] p-7"
        style={{ margin: "40px 0px", textAlign: "right" }}
      >
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
