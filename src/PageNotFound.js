import { FaRegSadCry } from "react-icons/fa";
import { Link } from "react-router-dom";
import { routes } from "./routes";
import styled from "styled-components";
import { colors } from "./GlobalStyled";

const Container = styled.div`
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 680px) {
    padding: 80px;
  }

  h3 {
    font-size: 80px;
    font-weight: 700;
    color: ${colors.point};
    margin-bottom: 15px;

    @media screen and (max-width: 680px) {
      font-size: 60px;
      margin-bottom: 15px;
    }
  }

  h4 {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 25px;

    @media screen and (max-width: 680px) {
      font-size: 24px;
      margin-bottom: 15px;
    }
  }

  p {
    font-size: 16px;
    line-height: 20px;
    font-weight: 200;
    text-align: center;

    @media screen and (max-width: 680px) {
      font-size: 14px;
      margin-bottom: 15px;
    }
  }
`;
const Icon = styled.div`
  font-size: 240px;

  @media screen and (max-width: 680px) {
    font-size: 200px;
  }
`;

const Button = styled.div`
  width: 120px;
  margin: 30px;
  padding: 15px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.point};
    background-color: ${colors.point};
  }

  @media screen and (max-width: 680px) {
    margin: 20px;
  }
`;

export const PageNotFound = () => {
  return (
    <Container>
      <Icon>
        <FaRegSadCry />
      </Icon>
      <h3>404</h3>
      <h4>Page Not Found</h4>
      <p>
        죄송합니다. 페이지를 찾을 수 없습니다. <br />
        존재하지 않은 주소를 입력하셨거나 요청하신 페이지의 주소가 변경,
        삭제되어 찾을 수 없습니다.
      </p>
      <Button>
        <Link to={routes.home}>홈으로</Link>
      </Button>
    </Container>
  );
};
