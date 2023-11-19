import "../App.css";
import React, { useContext, useState,useEffect } from 'react';
import formContext from '../Context/FormContext';
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Grid from "@mui/material/Grid";
import axios from "axios";


function DocumentSection() {
  const { setcurrentStep, setuserData, userData } = useContext(formContext);
   const [formComplete, setFormComplete] = useState(false);

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
    class10Marksheet: "",
    class12Marksheet: "",
    graduationMarksheet: "",
    postGraduationMarksheet: "",
    resumeCV: "",
    recommendationLetter: "",
    salarySlip: "",
    others: "",
  });


  const handleFileChange = async (event, fieldName) => {
    console.log("Handle file change called ");
    const file = event.target.files[0];
    console.log("FILE : ", file);

    // Update formValues
    setFormValues({
      ...formValues,
      [fieldName]: file.name // Store the file name or null
    });

    console.log(formValues)
    // Update userData
   
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "http://localhost:4000/upload",
        formData
      );

      setuserData({
        ...userData,
        documents: {
          ...userData.documents,
          [fieldName]: response.data.fileLocation,
        },
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    console.log(userData)
  };

   useEffect(() => {
     // Check if all fields are filled
     const isFormComplete =
       formValues.class10Marksheet !== "" &&
       formValues.class12Marksheet !== "" &&
       formValues.graduationMarksheet !== "" &&
       formValues.postGraduationMarksheet !== "" &&
       formValues.resumeCV !== "" &&
       formValues.recommendationLetter !== "" &&
       formValues.salarySlips !== "" &&
       formValues.others !== "";


     // Update the completion status
     setFormComplete(isFormComplete);
     console.log(formValues)
      console.log("Form Complete:", isFormComplete);

   }, [formValues]);
  
  return (
    <div className="my-[50px]">
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <h3 className="my-5">Class 10 Marksheet</h3>
        </Grid>

        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            // onClick={() => handleUpload("class10Marksheet")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "class10Marksheet")}
            />
          </Button>
        </Grid>
        <Grid item xs={1} className="file-upload">
          <div className="flex justify-center items-center">
            {formValues && formValues["class10Marksheet"] !== ""
              ? formValues["class10Marksheet"]
              : ""}
          </div>
        </Grid>

        <Grid item xs={5}>
          <h3 className="my-5">Class 12 Marksheet</h3>
        </Grid>
        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            // onClick={() => handleUpload("class12Marksheet")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "class12Marksheet")}
            />
          </Button>
        </Grid>
        <Grid item xs={1} className="file-upload">
          <div className="flex justify-center items-center">
            {formValues && formValues["class12Marksheet"] !== ""
              ? formValues["class12Marksheet"]
              : ""}
          </div>
        </Grid>
        <Grid item xs={5}>
          <h3 className="my-5">Graduation Marksheet</h3>
        </Grid>
        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            // onClick={() => handleUpload("graduationMarksheet")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "graduationMarksheet")}
            />
          </Button>
        </Grid>
        <Grid item xs={1} className="file-upload">
          <div className="flex justify-center items-center">
            {formValues && formValues["graduationMarksheet"] !== ""
              ? formValues["graduationMarksheet"]
              : ""}
          </div>
        </Grid>
        <Grid item xs={5}>
          <h3 className="my-5">Post Graduation Marksheet</h3>
        </Grid>
        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            // onClick={() => handleUpload("postGraduationMarksheet")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "postGraduationMarksheet")}
            />
          </Button>
        </Grid>
        <Grid item xs={1} className="file-upload">
          <div className="flex justify-center items-center">
            {formValues && formValues["postGraduationMarksheet"] !== ""
              ? formValues["postGraduationMarksheet"]
              : ""}
          </div>
        </Grid>
        <Grid item xs={5}>
          <h3 className="my-5">Resume/CV</h3>
        </Grid>

        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            // onClick={() => handleUpload("resumeCV")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "resumeCV")}
            />
          </Button>
        </Grid>
        <Grid item xs={1} className="file-upload">
          <div className="flex justify-center items-center">
            {formValues && formValues["resumeCV"] !== ""
              ? formValues["resumeCV"]
              : ""}
          </div>
        </Grid>
        <Grid item xs={5}>
          <h3 className="my-5">Recommendation Letter</h3>
        </Grid>

        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            // onClick={() => handleUpload("recommendationLetter")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "recommendationLetter")}
            />
          </Button>
        </Grid>
        <Grid item xs={1} className="file-upload">
          <div className="flex justify-center items-center">
            {formValues && formValues["recommendationLetter"] !== ""
              ? formValues["recommendationLetter"]
              : ""}
          </div>
        </Grid>
        <Grid item xs={5}>
          <h3 className="my-5">Salary Slip</h3>
        </Grid>

        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            // onClick={() => handleUpload("salarySlip")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "salarySlip")}
            />
          </Button>
        </Grid>
        <Grid item xs={1} className="file-upload">
          <div className="flex justify-center items-center">
            {formValues && formValues["salarySlip"] !== ""
              ? formValues["salarySlip"]
              : ""}
          </div>
        </Grid>
        <Grid item xs={5}>
          <h3 className="my-5">Additional Document</h3>
        </Grid>

        <Grid item xs={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="uploadFile"
            // onClick={() => handleUpload("others")}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => handleFileChange(e, "others")}
            />
          </Button>
        </Grid>
        <Grid item xs={1} className="file-upload">
          <div className="flex justify-center items-center">
            {formValues && formValues["others"] !== ""
              ? formValues["others"]
              : ""}
          </div>
        </Grid>
        <Grid item xs={12} className="my-5">
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
            // disabled={!formComplete}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default DocumentSection