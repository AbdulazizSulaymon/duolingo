import styled from "styled-components";

const StatusWrapper = styled.div`
  margin-top: 20px;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background: ${(props) => {
    return props.isTrue ? "#58cc02" : "#ff3838";
  }};
`;

export default StatusWrapper;
