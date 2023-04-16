import React, { useState } from 'react';

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
      <h3>{question}</h3>
      <ul>
        {choices.map((choice, i) => (
          <li key={i}>
            <label>
              <input
                type="radio"
                value={choice}
                checked={response === choice}
                onChange={handleChange}
              />
              {choice}
            </label>
          </li>
        ))}
        <li>
          <label>
            <input
              type="radio"
              value="other"
              checked={otherChecked}
              onChange={handleChange}
            />
            Other:
            <input
              type="text"
              value={otherInput}
              onChange={handleOtherInputChange}
            />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Question;
