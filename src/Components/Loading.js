import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { colors } from "../GlobalStyled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  size: 500px;
`;

export const Loading = () => {
  return (
    <Container>
      <ScaleLoader
        height={100}
        margin={5}
        radius={10}
        width={10}
        color={colors.point}
      />
    </Container>
  );
};
