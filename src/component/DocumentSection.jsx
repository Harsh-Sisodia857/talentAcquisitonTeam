// import "../App.css";
import React, { useContext, useState } from 'react';
import formContext from '../Context/FormContext';
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Grid from "@mui/material/Grid";
import axios from "axios";


function DocumentSection() {
  const { setcurrentStep, setuserData, userData } = useContext(formContext);
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [formValues, setFormValues] = useState({
    class10Marksheet: null,
    class12Marksheet: null,
    graduationMarksheet: null,
    postGraduationMarksheet: null,
    resumeCV: null,
    recommendationLetter: null,
    salarySlips: null,
    others: null,
  });


  const handleFileChange = (event, fieldName) => {
    console.log("Handle file change called ")
    const file = event.target.files[0];
    console.log("FILE : ", file);
    setFormValues({
      ...formValues,
      [fieldName]: file,
    });
    setuserData([...userData,{"documents" : formValues}]);
    console.log("Form Value : ",formValues)
  };

  const handleUpload = (fieldName) => {
       console.log(fieldName)
       const formData = new FormData();
       formData.append("file", formValues[fieldName]);
       console.log(formData)
     };

  
  return (
    <div className="my-[50px]">
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <h3 className="my-5">Class 10 Marksheet</h3>
        </Grid>

        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            onClick={() => handleUpload("class10Marksheet")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "class10Marksheet")}
            />
          </Button>
          <div>{userData["class10Marksheet"]}</div>
        </Grid>

        <Grid item xs={6}>
          <h3 className="my-5">Class 12 Marksheet</h3>
        </Grid>
        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            onClick={() => handleUpload("class12Marksheet")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "class12Marksheet")}
            />
          </Button>
        </Grid>

        <Grid item xs={6}>
          <h3 className="my-5">Graduation Marksheet</h3>
        </Grid>
        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            onClick={() => handleUpload("graduationMarksheet")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "graduationMarksheet")}
            />
          </Button>
        </Grid>

        <Grid item xs={6}>
          <h3 className="my-5">Post Graduation Marksheet</h3>
        </Grid>
        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            onClick={() => handleUpload("postGraduationMarksheet")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "postGraduationMarksheet")}
            />
          </Button>
        </Grid>

        <Grid item xs={6}>
          <h3 className="my-5">Resume/CV</h3>
        </Grid>

        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            onClick={() => handleUpload("resumeCV")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "resumeCV")}
            />
          </Button>
        </Grid>

        <Grid item xs={6}>
          <h3 className="my-5">Recommendation Letter</h3>
        </Grid>

        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            onClick={() => handleUpload("recommendationLetter")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "recommendationLetter")}
            />
          </Button>
        </Grid>

        <Grid item xs={6}>
          <h3 className="my-5">Salary Slip</h3>
        </Grid>

        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            onClick={() => handleUpload("salarySlip")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "salarySlip")}
            />
          </Button>
        </Grid>

        <Grid item xs={6}>
          <h3 className="my-5">Additional Document</h3>
        </Grid>

        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            onClick={() => handleUpload("others")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "others")}
            />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() => setcurrentStep(1)}
            color="secondary"
            className="btn-prev"
          >
            Prev
          </Button>
          <Button
            variant="contained"
            onClick={() => setcurrentStep(3)}
            color="primary"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default DocumentSection