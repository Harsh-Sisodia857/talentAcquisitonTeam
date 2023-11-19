import React,{useContext} from 'react'
import { Grid, TextField, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import formContext from '../Context/FormContext';


function BasicDetails() {
  const { setcurrentStep, setuserData, userData } = useContext(formContext);
   const onChange = (e) => {
     setuserData({ ...userData, [e.target.name]: e.target.value });
   };
  return (
    <div className="my-10">
      <Grid container spacing={3}>
        <Grid item xs={12}>
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
        </Grid>

        <Grid item xs={12}>
          <TextField
            color="secondary"
            label="Email"
            name="Email"
            value={userData["Email"]}
            onChange={onChange}
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            color="secondary"
            label="Mobile Number"
            name="Mobile"
            value={userData["Mobile"]}
            onChange={onChange}
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              name="Date"
              className="w-[100%]"
              value={userData["Date"]}
              onChange={onChange}
              label="DOB"
              defaultValue={dayjs("2000-01-01")}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" fullWidth />
              )}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() => setcurrentStep(2)}
            color="primary"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default BasicDetails