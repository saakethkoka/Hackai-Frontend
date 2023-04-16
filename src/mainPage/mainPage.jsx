import {ImageOutput, InitialPromptBox, QuestionsAndAnswerBox} from "../components";
import {questions, image} from "../api/UserApi";
import React, { useState } from "react";

export const MainPage = () => {
    const [submittedText, setSubmittedText] = useState("");

    const handleTextSubmit = (text) => {
        setSubmittedText(text);
        const response = questions(text);
        console.log(response)
    };

    return (
        <>
            <div>
                <h1>Text Input Component</h1>
                <InitialPromptBox onTextSubmit={handleTextSubmit} />
                {submittedText && (
                    <div>
                        <h2>Submitted Text:</h2>
                        <p>{submittedText}</p>
                    </div>
                )}
            </div>
            <QuestionsAndAnswerBox />
            <ImageOutput />
        </>
    );
}