import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { shuffle } from "../../functions";
import MatchingGameWrapper from "./MatchingGameWrapper";

const MatchingGame = ({ questionObj, setSubmit, setStatus }) => {
  const [enWords, setEnWords] = useState({});
  const [uzWords, setUzWords] = useState({});
  const [words, setWords] = useState({});

  const [enWord, setEnWord] = useState("");
  const [uzWord, setUzWord] = useState("");

  console.log(enWords);
  console.log(uzWords);

  useEffect(() => {
    const arr = [...questionObj.words];

    const obj = {};
    questionObj.words.map((word) => (obj[`${word.en},${word.uz}`] = true));
    setWords(obj);

    //
    shuffle(arr);
    const obj1 = {};
    arr.map(
      (item) => (obj1[item.en] = { word: item.en, active: false, done: false })
    );

    shuffle(arr);
    const obj2 = {};
    arr.map(
      (item) => (obj2[item.uz] = { word: item.uz, active: false, done: false })
    );

    // shuffle(obj1);
    // shuffle(obj2);

    setEnWords(obj1);
    setUzWords(obj2);
  }, [questionObj]);

  useEffect(() => {
    if (enWord === "" || uzWord === "") return;

    const objEnWords = { ...enWords };
    const objUzWords = { ...uzWords };

    if (words[`${enWord},${uzWord}`]) {
      console.log("true");
      objEnWords[enWord].done = true;
      objUzWords[uzWord].done = true;
    } else console.log("false");

    objEnWords[enWord].active = false;
    setEnWords(objEnWords);

    objUzWords[uzWord].active = false;
    setUzWords(objUzWords);

    setEnWord("");
    setUzWord("");
  }, [enWord, uzWord]);

  const selectedEn = (obj) => {
    const objEnWords = { ...enWords };
    objEnWords[obj.word].active = !objEnWords[obj.word].active;
    if (enWord !== "") objEnWords[enWord].active = !objEnWords[enWord].active;
    setEnWords(objEnWords);

    setEnWord(obj.word);
  };

  const selectedUz = (obj) => {
    const objUzWords = { ...uzWords };
    objUzWords[obj.word].active = !objUzWords[obj.word].active;
    if (uzWord !== "") objUzWords[uzWord].active = !objUzWords[uzWord].active;
    setUzWords(objUzWords);

    setUzWord(obj.word);
  };

  return (
    <MatchingGameWrapper>
      <h1>Mos juftliklarni tanlang</h1>

      <div className="row">
        <div className="col-6">
          {Object.values(enWords).map((obj) => (
            <Button
              key={obj.word}
              disabled={obj.done}
              variant={(obj.active && "contained") || "outlined"}
              sx={{ display: "block", marginBottom: "10px" }}
              onClick={() => selectedEn(obj)}
            >
              {obj.word}
            </Button>
          ))}
        </div>
        <div className="col-6">
          {Object.values(uzWords).map((obj) => (
            <Button
              key={obj.word}
              disabled={obj.done}
              variant={(obj.active && "contained") || "outlined"}
              sx={{ display: "block", marginBottom: "10px" }}
              onClick={() => selectedUz(obj)}
            >
              {obj.word}
            </Button>
          ))}
        </div>
      </div>
    </MatchingGameWrapper>
  );
};

export default MatchingGame;
