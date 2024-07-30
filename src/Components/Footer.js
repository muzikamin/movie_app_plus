import styled from "styled-components";
import { Padding } from "../GlobalStyled";

const Container = styled.div`
  /* background-color: #fff4f8; */
  padding: 60px ${Padding.sidePadding};
  text-align: center;
  font-size: 14px;
  border-top: 0.5px solid #e8dae5;
`;

export const Footer = () => {
  return <Container>&copy; Minzy Kim | 2024</Container>;
};
