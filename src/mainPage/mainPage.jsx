import { useEffect, useState } from "react";
import {ImageOutput, InitialPromptBox, QuestionsAndAnswerBox, Background} from "../components";
import { questionsAPI, imageAPI } from "../api/UserApi";
import { Paper, CircularProgress } from "@mui/material";

export const MainPage = () => {
  const [prompt, setPrompt] = useState("");
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [image, setImage] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [submittedImage, setSubmittedImage] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTextSubmit = (text) => {
    setPrompt(text);
    setIsLoading(true);
    questionsAPI(text)
      .then((data) => {
        setQuestions(data.questions);
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setImageUrls([]);
    setIsLoading(true);
    imageAPI(responses, prompt)
      .then((data) => {
        setImageUrls((prevUrls) => [...prevUrls, data.image_url]);
      })
      .finally(() => setIsLoading(false));
    imageAPI(responses, prompt)
      .then((data) => {
        setImageUrls((prevUrls) => [...prevUrls, data.image_url]);
      })
      .finally(() => setIsLoading(false));
    imageAPI(responses, prompt)
      .then((data) => {
        setImageUrls((prevUrls) => [...prevUrls, data.image_url]);
      })
      .finally(() => setIsLoading(false));
    imageAPI(responses, prompt)
      .then((data) => {
        setImageUrls((prevUrls) => [...prevUrls, data.image_url]);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Background>
        <div style={{ textAlign: "center", paddingBottom: "40px" }}>
          <h1 style={{ paddingBottom: "20px" }}>
            What do you want an image of?
          </h1>
          <InitialPromptBox onTextSubmit={handleTextSubmit} />
          {submittedText && (
            <div>
              <h2>Submitted Text:</h2>
              <p>{submittedText}</p>
            </div>
          )}
        </div>
        {isLoading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        ) : questions.length > 0 ? (
          <QuestionsAndAnswerBox
            questions={questions}
            setResponses={setResponses}
            responses={responses}
            handleSubmit={handleSubmit}
          />
        ) : (
          <h1></h1>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          {imageUrls.map((imageUrl, index) => (
            <ImageOutput
              key={index}
              imageURL={imageUrl}
              style={{ margin: "10px 0" }}
            />
          ))}
        </div>
    </Background>
  );
};
