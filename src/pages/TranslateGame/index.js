import TranslateGameWrapper from "./TranslateGameWrapper";
import Button from "@mui/material/Button";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useEffect, useState } from "react";
import questions from "../../data/questions";

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

const TranslateGame = () => {
  const speak = (text) => {
    var synth = window.speechSynthesis;
    var utterance1 = new SpeechSynthesisUtterance(text);
    synth.speak(utterance1);

    var amISpeaking = synth.speaking;
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const [level, setLevel] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [variants, setVariants] = useState([]);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const { question, answer, words } = questions[level];
    const variants = [...answer.split(" "), ...(words || [])];

    shuffle(variants);

    setVariants([...variants]);
    setQuestion(question);
    setAnswers([]);
  }, [level]);

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

  const nextLevel = () => {
    if (level + 1 < questions.length) setLevel(level + 1);
  };

  const checkAnswer = () => {
    const ans = answers.join(" ");
    console.log(ans);
    console.log(ans == questions[level].answer);
  };

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
      <div className="variantsBlock mt-5 d-flex align-items-center justify-content-between">
        <Button onClick={nextLevel} variant={"outlined"} className="me-1">
          Keyingisi
        </Button>
        {answers.length > 0 && (
          <Button
            onClick={checkAnswer}
            variant={"contained"}
            color="success"
            className="me-1"
          >
            Tekshirish
          </Button>
        )}
      </div>
    </TranslateGameWrapper>
  );
};

export default TranslateGame;
