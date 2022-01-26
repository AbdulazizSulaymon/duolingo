import styled from "styled-components";

const ScoreWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;

  .line {
    height: 20px;
    background-color: #e8e8e8;
    border-radius: 10px;
    flex: 1;
    overflow: hidden;

    .percent {
      height: 100%;
      border-radius: 10px;
      background-color: green;
      transition: 0.3s;
    }
  }
`;

export default ScoreWrapper;
