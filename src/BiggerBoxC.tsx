import styled from "styled-components";
import Box from "./Box";
import Footer from "./Footer";
import { motion } from "framer-motion";

interface IBig {
  color1: string;
  color2: string;
}
const BiggerBox = styled(motion.div)<IBig>`
  width: 300px;
  height: 300px;
  background: linear-gradient(
    135deg,
    ${(props) => props.color1},
    ${(props) => props.color2}
  );
  border-radius: 40px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px;
  position: relative;
`;

function BiggerBoxC() {
  return (
    <>
      <BiggerBox color1="#FC0092" color2="#DE00EB">
        <Box key={0} ani={0} bgColor={"rgba(255,255,255,1)"} />
        <Footer ani={0} text="Animation" />
      </BiggerBox>
      <BiggerBox color1="#D702F0" color2="#9C12FE">
        <Box key={1} ani={1} bgColor={"rgba(255,255,255,0.4)"} />
        <Footer ani={1} text="Variants" />
      </BiggerBox>
      <BiggerBox color1="#9510FF" color2="#7901FF">
        <Box key={2} ani={2} bgColor={"rgba(255,255,255,1)"} />
        <Footer ani={2} text="Gestures" />
      </BiggerBox>
      <BiggerBox color1="#7100FF" color2="#4500FE">
        <Box key={3} ani={3} bgColor={"rgba(255,255,255,0.4)"} />
        <Footer ani={3} text="Drag" />
      </BiggerBox>
      <BiggerBox color1="#3F0BFF" color2="#0851FE">
        <Box key={4} ani={4} bgColor={"rgba(255,255,255,0.4)"} />
        <Footer ani={4} text="Scroll" />
      </BiggerBox>
      <BiggerBox color1="#015CFF" color2="#0096FF">
        <Box key={5} ani={5} bgColor={"rgba(255,255,255,0.4)"} />
        <Footer ani={5} text="Path" />
      </BiggerBox>
      ;
    </>
  );
}
export default BiggerBoxC;
