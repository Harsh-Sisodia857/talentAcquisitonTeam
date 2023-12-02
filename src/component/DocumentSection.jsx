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
    <div className="my-10" style={{ margin: "55px 207px", height: "100%" }}>
      <div className="py-4">
        <p className="font-semibold text-lg">Preview</p>
        <p className="pb-1 pr-2">You will be able to customize the fiels in the later stage</p>
      </div>
      <div className="box flex flex-col gap-2 pl-8 pt-8 pb-7 bg-blue-100 ">
        <h1 className="font-normal text-2xl">Name Of The Enquiry Form</h1>
        <p className="mb-5">One Line description of the Form</p>
        <div>Provide the following information to process your application</div>
      </div>
      <div className="bg-white p-[20px]">
        <div className="m-auto w-[50%]" style={{ margin: "80px auto" }}>
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
                Attach File Upto 5Kb
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
                Attach File Upto 5Kb
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
                Attach File Upto 5Kb
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
                Attach File Upto 5Kb
                <VisuallyHiddenInput
                  type="file"
                  onChange={(e) =>
                    handleFileChange(e, "postGraduationMarksheet")
                  }
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
                Attach File Upto 5Kb
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
                Attach File Upto 5Kb
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
                Attach File Upto 5Kb
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
                Attach File Upto 5Kb
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
          </Grid>
        </div>
      </div>
      <div
        className="w-full bg-white m-[11px 0px] p-7"
        style={{ margin: "40px 0px", textAlign: "right" }}
      >
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
          //disabled={!formComplete}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default DocumentSection