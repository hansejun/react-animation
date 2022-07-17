import styled from "styled-components";
import { motion } from "framer-motion";

interface IFooter {
  text: string;
  ani: number;
}

const FooterContainer = styled(motion.footer)`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 15px;
`;
const Text = styled.h2`
  font-size: 23px;
  font-weight: bold;
  color: white;
`;
const ICons = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
`;
const Icon = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
const Icon2 = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  margin-left: 10px;
  span {
    font-size: 15px;
    font-weight: 600;
    color: white;
  }
  cursor: pointer;
`;
const Svg = styled(motion.svg)`
  width: 15px;
  height: 15p;
  color: white;
`;
function Footer({ text, ani }: IFooter) {
  const onClick = () => {};
  return (
    <FooterContainer>
      <Text>{text}</Text>
      <ICons>
        <Icon onClick={onClick}>
          <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.84 0-95.17-15.58-134.2-44.86c-14.12-10.59-16.97-30.66-6.375-44.81c10.59-14.12 30.62-16.94 44.81-6.375c27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63C149.9 52.71 201.5 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"
            />
          </Svg>
        </Icon>
        <Icon2>
          <span>i</span>
        </Icon2>
      </ICons>
    </FooterContainer>
  );
}
export default Footer;
