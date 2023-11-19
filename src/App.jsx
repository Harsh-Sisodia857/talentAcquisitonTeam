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
      <div className="flex justify-center items-center">
        <div className="w-[50%]">
          <div className="center-stepper">
            <Stepper activeStep={currentStep - 1} orientation={"horizontal"}>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>
          {showSteps(currentStep)}
        </div>
      </div>
    </div>
  );
}

export default App;
