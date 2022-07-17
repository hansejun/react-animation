import {
  motion,
  useTransform,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import BiggerBoxC from "./BiggerBoxC";

interface IChapter {
  isTwo: boolean;
}

const Wrapper = styled.div`
  width: 1000px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  gap: 50px;
  align-content: center;
`;
const Chapter = styled(motion.div)<IChapter>`
  width: 100%;
  height: 100vh;
  background: ${(props) =>
    props.isTwo ? "#0F0F0F" : "linear-gradient(135deg,#3F0BFF,#0851FE)"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper2 = styled.div`
  width: 1000px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
  gap: 20px;
`;
const Box = styled(motion.div)`
  height: 200px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;
const OverlayBox = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;
function App() {
  const { scrollYProgress } = useViewportScroll();
  const [id, setId] = useState<null | string>(null);
  const overlay = {
    hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
    visible: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
    exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
  };
  const yTransition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(135deg,rgb(45, 126, 255),rgb(62, 15, 252))",
      "linear-gradient(135deg,rgb(18, 52, 107),rgb(19, 10, 84))",
      "linear-gradient(135deg,rgb(27, 22, 71),rgb(15,15,15))",
    ]
  );
  return (
    <>
      <Chapter isTwo={false} style={{ background: yTransition }}>
        <Wrapper2 style={{ marginBottom: 70 }}>
          {["1", "2", "3", "4"].map((item) => (
            <Box key={item} layoutId={item} onClick={() => setId(item)}>
              {item}
            </Box>
          ))}
        </Wrapper2>
        <AnimatePresence>
          {id ? (
            <Overlay
              onClick={() => setId(null)}
              variants={overlay}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <OverlayBox style={{ marginBottom: 70 }} layoutId={id}>
                {id}
              </OverlayBox>
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Chapter>
      <Chapter isTwo={true}>
        <Wrapper>
          <BiggerBoxC />
        </Wrapper>
      </Chapter>
    </>
  );
}

export default App;
