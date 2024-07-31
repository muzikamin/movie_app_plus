import { useForm } from "react-hook-form";
import styled from "styled-components";
import { colors, Padding } from "../../GlobalStyled";
import { BsFillSearchHeartFill } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  padding: 140px ${Padding.sidePadding};
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  all: unset;
  width: 100%;
  height: 50px;
  /* background-color: aliceblue; */
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 5px;

  input {
    all: unset;
    width: 100%;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
    /* background-color: aliceblue; */
    &::placeholder {
      all: unset;
    }
  }

  button {
    all: unset;
    color: ${colors.point};
    font-size: 30px;
    margin-right: 15px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.div`
  font-size: 24px;
`;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = () => {};

  console.log(errors);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "검색 내용을 입력해주세요",
          })}
          type="text"
          placeholder="보고 싶은 영화를 검색해주세요"
        />
        <button>
          <BsFillSearchHeartFill />
        </button>

        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>
    </Container>
  );
};
