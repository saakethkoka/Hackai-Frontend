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

    return (
        <>
            <InitalPromptBox />
            <ImageOutput />
            {questions.length > 0 ? <QuestionsAndAnswerBox questions={questions} setResponses={setResponses} responses={responses}/> : <h1>Hi</h1>}
        </>
    );
}