import React, { useState } from 'react';
import formContext from './FormContext';
import axios from "axios";


function FormState(props) {
    const [currentStep, setcurrentStep] = useState(1);
    const [userData, setuserData] = useState([]);
  const [finalData, setfinalData] = useState([]);

    

  const submitData = async () => {
    console.log(userData);
    setfinalData(finalData => [...finalData, userData]);
    try {
      const response = await axios.post('http://localhost:3000/submitForm', finalData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setuserData([])
    setcurrentStep(1);
  }
    return (
      <div>
        <formContext.Provider
          value={{
            currentStep,
            userData,
            finalData,
            setcurrentStep,
            setuserData,
            setfinalData,
            submitData,
          }}
        >
          {props.children}
        </formContext.Provider>
      </div>
    );
}

export default FormState
