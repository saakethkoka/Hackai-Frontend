import { useEffect, useState } from "react";
import { ImageOutput, InitialPromptBox, QuestionsAndAnswerBox } from "../components";
import { questionsAPI, imageAPI } from "../api/UserApi";
import { Paper } from "@mui/material";

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

  const backgroundStyle = {
    background: "linear-gradient(to bottom, #a6c8ff, #fafcff)",
  };

  return (
    <div style={backgroundStyle}>
      <Paper elevation={2} style={{ margin: "auto", padding: "50px", width: "60%"}}>
        <div style={{ textAlign: "center", paddingBottom: "40px" }}>
          <h1 style={{ paddingBottom: "20px" }}>What do you want an image of?</h1>
          <InitialPromptBox onTextSubmit={handleTextSubmit} />
          {submittedText && (
            <div>
              <h2>Submitted Text:</h2>
              <p>{submittedText}</p>
            </div>
          )}
        </div>
        {questions.length > 0 ? (
          <QuestionsAndAnswerBox
            questions={questions}
            setResponses={setResponses}
            responses={responses}
            handleSubmit={handleSubmit}
          />
        ) : (
          <h1></h1>
        )}
        <ImageOutput imageURL={image} />
      </Paper>
    </div>
  );
};
