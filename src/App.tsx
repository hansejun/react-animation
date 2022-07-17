import styled from "styled-components";

import BiggerBoxC from "./BiggerBoxC";

const Wrapper = styled.div`
  width: 1000px;
  height: 130vh;
  margin: 0 auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  gap: 50px;
`;

function App() {
  return (
    <Wrapper>
      <BiggerBoxC />
    </Wrapper>
  );
}

export default App;
