import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, Padding } from "../GlobalStyled";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  font-size: 26px;
  padding: 30px ${Padding.sidePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: "all 1s";
  background-color: ${(props) => props.$BgColor};

  @media screen and (max-width: 1280px) {
    font-size: 20px;
    padding: 15px ${Padding.MosidePadding};
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }

  @media screen and (max-width: 1280px) {
    font-size: 26px;
  }

  @media screen and (max-width: 860px) {
    font-size: 18px;
  }
`;

const Menu = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 860px) {
    font-size: 16px;
  }

  @media screen and (max-width: 460px) {
    width: 60%;
    font-size: 16px;
  }
`;

export const Header = () => {
  const [navColor, setnavColor] = useState("transparent");

  const ListenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    useEffect(() => {
      window.addEventListener("scroll", ListenScrollEvent);
      return () => {
        window.removeEventListener("scroll", ListenScrollEvent);
      };
    }, []);
  };

  return (
    <Container $BgColor={navColor}>
      <Logo>
        <Link to={routes.home}>MINFLIX</Link>
      </Logo>
      <Menu>
        <li>
          <Link to={routes.home}>HOME</Link>
        </li>
        <li>
          <Link to={routes.recommend}>추천영화</Link>
        </li>
        <li>
          <Link to={routes.Search}>검색하기</Link>
        </li>
      </Menu>
    </Container>
  );
};
