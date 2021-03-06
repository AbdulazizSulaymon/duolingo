import TranslateGameWrapper from "./TranslateGameWrapper";
import Button from "@mui/material/Button";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useEffect, useState } from "react";
import { shuffle, speak } from "../../functions";

const GenerateButtons = ({ arr, click }) => {
  return (
    <>
      {arr.map((text) => (
        <Button
          key={text}
          variant={"outlined"}
          className="me-1"
          onClick={() => click(text)}
        >
          {text}
        </Button>
      ))}
    </>
  );
};

const TranslateGame = ({ questionObj, setSubmit, setStatus }) => {
  const [answers, setAnswers] = useState([]);
  const [variants, setVariants] = useState([]);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const { question, answer, words } = questionObj;
    const variants = [...answer.split(" "), ...(words || [])];

    shuffle(variants);

    setVariants([...variants]);
    setQuestion(question);
    setAnswers([]);
  }, []);

  const addAnswer = (variant) => {
    const index = variants.indexOf(variant);
    const arr = [...variants];
    arr.splice(index, 1);
    setVariants(arr);

    setAnswers([...answers, variant]);
  };

  const deleteAnswer = (variant) => {
    const index = answers.indexOf(variant);
    const arr = [...answers];
    arr.splice(index, 1);
    setAnswers(arr);

    setVariants([...variants, variant]);
  };

  useEffect(() => {
    setSubmit({
      func: () => {
        const ans = answers.join(" ");
        const res = ans == questionObj.answer;
        console.log(res);
        setStatus(res);
      },
    });
  }, [answers]);

  return (
    <TranslateGameWrapper>
      <h1>Quyidagi gapni tarjima qiling</h1>
      <div className="questionBlock mt-4 d-flex align-items-center">
        <img
          src="https://d2pur3iezf4d1j.cloudfront.net/images/52a5a774c4de18f4a4e8c91d91788347"
          alt=""
          className="avatar"
        />
        <div className="ms-4 rounded question p-2 px-4 ps-1 d-flex align-items-center">
          <Button className="me-1" onClick={() => speak(question)}>
            <VolumeUpIcon />
          </Button>
          <p className="mb-0">{question}</p>
        </div>
      </div>
      <div className="answerBlock my-4 d-flex align-items-center">
        <GenerateButtons arr={answers} click={deleteAnswer} />
      </div>
      <div className="variantsBlock d-flex align-items-center">
        <GenerateButtons arr={variants} click={addAnswer} />
      </div>
    </TranslateGameWrapper>
  );
};

export default TranslateGame;
