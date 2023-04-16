import { useEffect, useState } from "react";
import {ImageOutput, InitialPromptBox, QuestionsAndAnswerBox} from "../components";
import {questionsAPI} from "../api/UserApi";

export const MainPage = () => {
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState([]);


    // useEffect(() => {
    //     questionsAPI().then((data) => {
    //         setQuestions(data.questions);
    //         console.log(data);
    //     });
    // }, []);

    const [submittedText, setSubmittedText] = useState("");

    const handleTextSubmit = (text) => {
        questionsAPI(text).then((data) => {
            setQuestions(data.questions);
            console.log(data);
        });
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
            {questions.length > 0 ? <QuestionsAndAnswerBox questions={questions} setResponses={setResponses} responses={responses}/> : <h1>Hi</h1>}
            <ImageOutput />
        </>
    );
}