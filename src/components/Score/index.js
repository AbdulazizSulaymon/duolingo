import ScoreWrapper from "./ScoreWrapper";

const Score = ({ percent }) => {
  return (
    <ScoreWrapper>
      <div className="line">
        <div className="percent" style={{ width: `${percent}%` }}></div>
      </div>
    </ScoreWrapper>
  );
};

export default Score;
