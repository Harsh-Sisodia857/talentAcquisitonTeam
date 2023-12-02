import React,{useContext,useState,useEffect} from 'react'
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import formContext from '../Context/FormContext';
import InputLabel from "@mui/material/InputLabel";


function StatementPurpose() {
  const { setcurrentStep, userData, setuserData } = useContext(formContext);
    const [areQuestionsComplete, setQuestionsComplete] = useState(false);

    useEffect(() => {
      // Check if all answer fields are filled
      const areAllQuestionsFilled =
        userData["questionA"] && userData["questionB"] && userData["questionC"];

      // Update the completion status
      setQuestionsComplete(areAllQuestionsFilled);
    }, [userData]);
    const handleAnswerChange = (event, question) => {
      setuserData({
        ...userData,
        [question]: event.target.value,
      });
    };

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
        <div className=" w-[50%]" style={{ margin: "80px auto" }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <label htmlFor="question1">
                1. Tell me about a time you were asked to do something you had
                never done before. How did you react? What did you learn?
              </label>

              <TextField
                id="question1"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={userData["questionA"]}
                onChange={(e) => handleAnswerChange(e, "questionA")}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="question2">
                2. Tell me about the last time something significant didn’t go
                according to plan at work. What was your role? What was the
                outcome?
              </label>
              <TextField
                id="question2"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={userData["questionB"]}
                onChange={(e) => handleAnswerChange(e, "questionB")}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="question3">
                3. What are the three things that are most important to you in a
                job?
              </label>
              <TextField
                id="question3"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={userData["questionC"]}
                onChange={(e) => handleAnswerChange(e, "questionC")}
              />
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
          color="secondary"
          className="btn-prev"
        >
          Prev
        </Button>
        <Button
          variant="contained"
          onClick={() => setcurrentStep(4)}
          color="primary"
          disabled={!areQuestionsComplete}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default StatementPurpose
