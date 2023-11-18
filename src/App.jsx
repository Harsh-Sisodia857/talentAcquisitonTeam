import React from "react";
import "./App.css";
import BasicDetails from "./component/BasicDetails";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import DocumentSection from "./component/DocumentSection";
import StatementPurpose from "./component/StatementPurpose";
import InterviewAbilitySection from "./component/InterviewAbilitySection";

function App() {
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
    <div>
      <div className="center-stepper">
        <Stepper activeStep={1} orientation={"horizontal"}>
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
      {showSteps(2)}
    </div>
  );
}

export default App;
