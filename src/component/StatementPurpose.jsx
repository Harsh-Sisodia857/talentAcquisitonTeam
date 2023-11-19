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
    <div className="my-10">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <label htmlFor="question1">
            Tell me about a time you were asked to do something you had never
            done before. How did you react? What did you learn?
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
            Tell me about the last time something significant didn’t go
            according to plan at work. What was your role? What was the outcome?
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
            What are the three things that are most important to you in a job?
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
      <div className="my-10">
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
