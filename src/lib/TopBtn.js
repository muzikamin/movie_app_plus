import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../GlobalStyled";

const STopBtn = styled.div`
  width: 80px;
  height: 80px;
  /* background-color: aliceblue; */
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  text-align: center;
  border-radius: 50%;
  font-size: 26px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.point};
    background-color: ${colors.point};
  }

  @media screen and (max-width: 1280px) {
    width: 60px;
    height: 60px;
    bottom: 30px;
    right: 30px;
    font-size: 24px;
  }

  @media screen and (max-width: 860px) {
    width: 50px;
    height: 50px;
    bottom: 15px;
    right: 15px;
    font-size: 18px;
  }
`;

export const TopBtn = () => {
  const clickEvent = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <STopBtn onClick={clickEvent}>
      <FaArrowUp />
    </STopBtn>
  );
};
