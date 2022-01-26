import TranslateGame from "./pages/TranslateGame";
import {
  TranslateText,
  SimpleTest,
  ImageTest,
  MatchingWords,
  ListeningText,
} from "./data/const";
import questions from "./data/questions";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Score from "./components/Score";
import Status from "./components/Status";
import ListeningGame from "./pages/ListeningGame";
import MatchingGame from "./pages/MatchingGame";

function App() {
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState(0);
  const [submit, setSubmit] = useState({ func: () => {} });
  const [level, setLevel] = useState(0);
  const questionObj = questions[level];

  const nextLevel = () => {
    if (level < questions.length) {
      setLevel(level + 1);
      setStatus(0);
      setSubmit({ func: () => {} });
    }
  };

  useEffect(() => {
    if (status === true) {
      setScore(score + 1);
    } else if (status === false && score >= 0.5) {
      setScore(score - 0.5);
    }
  }, [status]);

  const getGame = (type, props) => {
    switch (type) {
      case TranslateText:
        return <TranslateGame {...props} />;
      case ListeningText:
        return <ListeningGame {...props} />;
      case MatchingWords:
        return <MatchingGame {...props} />;
    }
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-9 col-lg-8 col-xl-7">
            {/* {Score} */}
            <Score percent={(score / questions.length) * 100} />

            {getGame(questionObj.type, { questionObj, setSubmit, setStatus })}

            {/* {Buttons: Skip, Check} */}
            {status === 0 && (
              <div className="variantsBlock mt-5 d-flex align-items-center justify-content-between">
                <Button
                  onClick={nextLevel}
                  variant={"outlined"}
                  className="me-1"
                >
                  Keyingisi
                </Button>

                <Button
                  onClick={() => submit.func()}
                  variant={"contained"}
                  color="success"
                  className="me-1"
                >
                  Tekshirish
                </Button>
              </div>
            )}

            {/* {Status} */}
            {<Status isTrue={status} nextLevel={nextLevel}></Status>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
