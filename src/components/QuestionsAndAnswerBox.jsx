import React, { useEffect, useState } from 'react';
import Question from './Question';

export const QuestionsAndAnswerBox = ({ questions, setResponses, responses }) => {


    const handleResponse = (questionIndex, choice) => {
        const updatedResponses = [...responses];
        updatedResponses[questionIndex] = {
            question: questions[questionIndex].question,
            response: choice,
        };
        setResponses(updatedResponses);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(responses);
    };

    return (
        <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
                <Question
                    key={index}
                    question={question.question}
                    choices={question.choices}
                    index={index}
                    response={responses[index]?.response}
                    handleResponse={handleResponse}
                />
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

