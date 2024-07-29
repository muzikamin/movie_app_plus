import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, Padding } from "../GlobalStyled";

const Container = styled.div`
  font-size: 26px;
  margin: 30px ${Padding.sidePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }
`;

const Menu = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <Container>
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
