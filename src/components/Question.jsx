import React, { useState } from 'react';
import { Typography, Radio, RadioGroup, FormControl, FormControlLabel, TextField } from '@mui/material';

const Question = ({ question, choices, index, response, handleResponse }) => {

  const handleChange = (event) => {
    if (event.target.value === 'other') {
      setOtherChecked(true);
    } else {
      setOtherInput('');
      setOtherChecked(false);
      handleResponse(index, event.target.value);
    }
  };

  const [otherInput, setOtherInput] = useState('');
  const [otherChecked, setOtherChecked] = useState(false);

  const handleOtherInputChange = (event) => {
    setOtherChecked(true);
    setOtherInput(event.target.value);
    handleResponse(index, event.target.value);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {question}
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="quiz"
          value={response}
          onChange={handleChange}
        >
          {choices.map((choice, i) => (
            <FormControlLabel
              key={i}
              value={choice}
              control={<Radio />}
              label={choice}
            />
          ))}
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Other"
          />
          <TextField
            multiline={false}
            rows={1}
            disabled={!otherChecked}
            value={otherInput}
            onChange={handleOtherInputChange}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Question;
