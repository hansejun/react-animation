import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

interface IBoxd {
  bgColor: string;
  ani?: number;
}

const boxVar1 = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};
const boxVar2 = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};
const boxVar3 = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "rgb(46, 204, 113)",
    transition: { duration: 10 },
  },
};
const boxVar4 = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};
const circleVar = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};
const SmallBox = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 20px;
`;
const SmallBox3 = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  position: absolute;
  top: 80px;
`;
const Boxd = styled(motion.div)<IBoxd>`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: ${(props) => props.bgColor};
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;
const Circle = styled(motion.div)`
  background-color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const AniBox = styled(motion.div)<IBoxd>`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: ${(props) => props.bgColor};
  overflow: hidden;
`;
const Svg = styled.svg`
  width: 50px;
  height: 50px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;
const svgVar = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
  },
};

function Box({ bgColor, ani }: IBoxd) {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.5, 1]);
  const yTransform = useTransform(scrollYProgress, [0, 0.5, 1], [120, 80, 0.1]);

  return (
    <>
      {ani == 0 ? (
        <Boxd
          variants={boxVar1}
          initial="start"
          animate="end"
          bgColor={bgColor}
        />
      ) : null}
      {ani == 1 ? (
        <Boxd
          variants={boxVar2}
          initial="start"
          animate="end"
          bgColor={bgColor}
        >
          {ani == 1 ? <Circle variants={circleVar} /> : null}
          {ani == 1 ? <Circle variants={circleVar} /> : null}
          {ani == 1 ? <Circle variants={circleVar} /> : null}
          {ani == 1 ? <Circle variants={circleVar} /> : null}
        </Boxd>
      ) : null}
      {ani == 2 ? (
        <Boxd
          variants={boxVar3}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
          bgColor={bgColor}
        />
      ) : null}
      {ani == 3 ? (
        <AniBox bgColor={bgColor} ref={biggerBoxRef}>
          <SmallBox
            drag
            dragElastic={0.5}
            dragConstraints={biggerBoxRef}
            variants={boxVar4}
            whileHover="hover"
          />
        </AniBox>
      ) : null}
      {ani == 4 ? (
        <AniBox bgColor={bgColor} style={{ scale }}>
          <SmallBox3 style={{ top: yTransform }} />
        </AniBox>
      ) : null}
      {ani == 5 ? (
        <AniBox bgColor={bgColor}>
          <Svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <motion.path
              variants={svgVar}
              initial="start"
              animate="end"
              transition={{
                default: { duration: 2.6 },
                fill: { duration: 1, delay: 1.2 },
              }}
              d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
            ></motion.path>
          </Svg>
        </AniBox>
      ) : null}
    </>
  );
}
export default Box;
