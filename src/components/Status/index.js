import { Button } from "@mui/material";
import StatusWrapper from "./StatusWrapper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Status = ({ isTrue, nextLevel }) => {
  return (
    isTrue !== 0 && (
      <StatusWrapper isTrue={isTrue}>
        <div className="d-flex align-items-center">
          {isTrue ? (
            <>
              <CheckCircleIcon color="success" className="mainIcon me-2" />
              <h2>Javobingiz to'g'ri!</h2>
            </>
          ) : (
            <>
              <HighlightOffIcon color="error" className="mainIcon me-2" />
              <h2>Javobingiz xato!</h2>
            </>
          )}
        </div>
        <div>
          <Button onClick={nextLevel}>Keyingisi</Button>
        </div>
      </StatusWrapper>
    )
  );
};

export default Status;
