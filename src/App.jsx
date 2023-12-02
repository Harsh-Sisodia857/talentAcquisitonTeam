import React, { useContext } from "react";
import "./App.css";
import BasicDetails from "./component/BasicDetails";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import DocumentSection from "./component/DocumentSection";
import StatementPurpose from "./component/StatementPurpose";
import InterviewAbilitySection from "./component/InterviewAbilitySection";
import formContext from "./Context/FormContext";



function App() {
  const { currentStep, userData, finalData } = useContext(formContext);
  function showSteps(step) {
    switch (step) {
      case 1:
        return <BasicDetails />;
      case 2:
        return <DocumentSection />;
      case 3:
        return <StatementPurpose />;
      case 4:
        return <InterviewAbilitySection />;
    }
  }
  return (
    <div className="app-header">
      <div className="flex justify-center items-center bg-gray-200">
        <div>
          <div
            className="center-stepper border-b-4 border-indigo-500"
            style={{
              width: "100%",
              margin: "0px auto",
              padding: "24px 0px",
            }}
          >
            <Stepper
              activeStep={currentStep - 1}
              orientation={"horizontal"}
              style={{ width: "50%", margin: "auto" }}
            >
              <Step>
                <StepLabel>Form Selection</StepLabel>
              </Step>
              <Step>
                <StepLabel>Set Up</StepLabel>
              </Step>
              <Step>
                <StepLabel>Form Creation</StepLabel>
              </Step>
              <Step>
                <StepLabel>Review</StepLabel>
              </Step>
            </Stepper>
          </div>
          <div className="bg-gray-200 h-[200%]">{showSteps(currentStep)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
