import { useEffect, useState } from "react";
import {ImageOutput, InitialPromptBox, QuestionsAndAnswerBox} from "../components";
import {questionsAPI, imageAPI} from "../api/UserApi";

export const MainPage = () => {
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState([]);

    const [image, setImage] = useState("");

    const [submittedText, setSubmittedText] = useState("");
    const [submittedImage, setSubmittedImage] = useState("");

    const [prompt, setPrompt] = useState("");

    const handleTextSubmit = (text) => {
        setPrompt(text);
        questionsAPI(text).then((data) => {
            setQuestions(data.questions);
            console.log(data);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(responses);
        imageAPI(responses, prompt).then((data) => {
            setImage(data.image_url);
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
            {questions.length > 0 ? <QuestionsAndAnswerBox questions={questions} setResponses={setResponses} responses={responses} handleSubmit={handleSubmit} /> : <h1></h1>}
            <ImageOutput imageURL={image}/>
        </>
    );
}