import React, { useContext } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import formContext from "../Context/FormContext";

function BasicDetails() {
  const { setcurrentStep, setuserData, userData } = useContext(formContext);
  const onChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div className="my-10" style={{ margin: "55px 207px" }}>
      <div className="py-4">
        <p className="font-semibold text-lg">Preview</p>
        <p className="pb-1 pr-2">
          You will be able to customize the fiels in the later stage
        </p>
      </div>
      <div className="box flex flex-col gap-2 pl-8 pt-8 pb-7 bg-blue-100 ">
        <h1 className="font-medium text-2xl">Name Of The Enquiry Form</h1>
        <p className="mb-5">One Line description of the Form</p>
        <div>Provide the following information to process your application</div>
      </div>
      <div className="bg-white p-[20px]">
        <div className="m-auto w-[50%]" style={{ margin: "80px auto" }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <div className="flex flex-col">
                <div style={{ padding: "2px 0px", fontSize: "17px" }}>
                  1. Name*
                </div>
                <div>
                  <TextField
                    id="fullWidth"
                    color="secondary"
                    label="Name"
                    name="Name"
                    value={userData["Name"]}
                    onChange={onChange}
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="flex flex-col">
                <div style={{ padding: "2px 0px", fontSize: "17px" }}>
                  2. Email*
                </div>
                <div>
                  <TextField
                    color="secondary"
                    label="Email"
                    name="Email"
                    value={userData["Email"]}
                    onChange={onChange}
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="flex flex-col">
                <div style={{ padding: "2px 0px", fontSize: "17px" }}>
                  3. Date Of Birth
                </div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      name="Date"
                      className="w-[100%]"
                      value={userData["Date"]}
                      onChange={onChange}
                      label="DD/MM/YYYY"
                      renderInput={(params) => (
                        <TextField {...params} variant="outlined" fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="flex flex-col">
                <div style={{ padding: "2px 0px", fontSize: "17px" }}>
                  4. Contact no
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    color="secondary"
                    label="Enter Your 10 Digit Mobile Number"
                    name="Mobile"
                    value={userData["Mobile"]}
                    onChange={onChange}
                    variant="outlined"
                    fullWidth
                  />
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
          onClick={() => setcurrentStep(2)}
          color="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default BasicDetails;
