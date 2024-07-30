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
  z-index: 999;
  font-size: 18px;
  padding: 30px ${Padding.sidePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: "all 1s";
  background-color: ${(props) => props.$conScroll};

  @media screen and (max-width: 1280px) {
    font-size: 16px;
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
  width: 35%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 860px) {
    width: 50%;
    font-size: 16px;
  }

  @media screen and (max-width: 460px) {
    width: 60%;
    font-size: 16px;
  }
`;

export const Header = () => {
  const [headerFix, setHeaderFix] = useState();

  const scrollHandler = () => {
    const pageY = window.scrollY;
    // console.log(pageY);

    if (pageY >= 100) {
      setHeaderFix("rgba(0, 0, 0, 0.68)");
    } else {
      setHeaderFix("transparent");
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Container $conScroll={headerFix}>
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
