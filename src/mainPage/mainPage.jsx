import { useEffect, useState } from "react";
import {ImageOutput, InitalPromptBox, QuestionsAndAnswerBox} from "../components";
import {questionsAPI} from "../api/UserApi";

export const MainPage = () => {
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState([]);


    useEffect(() => {
        questionsAPI().then((data) => {
            setQuestions(data.questions);
            console.log(data);
        });
    }, []);

    const [submittedText, setSubmittedText] = useState("");

    const handleTextSubmit = (text) => {
        setSubmittedText(text);
        const response = questions(text);
        console.log(response)
    };

    return (
        <>
            {questions.length > 0 ? <QuestionsAndAnswerBox questions={questions} setResponses={setResponses} responses={responses}/> : <h1>Hi</h1>}
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