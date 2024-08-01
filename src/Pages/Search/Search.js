import { useForm } from "react-hook-form";
import styled from "styled-components";
import { colors, Padding } from "../../GlobalStyled";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { SearchData } from "../../api";
import { useState } from "react";
import { Loading } from "../../Components/Loading";
import { imgUrl } from "../../Constant/imgUrl";
import { Link } from "react-router-dom";
import { PageTitle } from "../../Components/PageTItle";

const Container = styled.div`
  width: 100%;
  min-height: 600px;
  padding: 140px ${Padding.sidePadding};

  @media screen and (max-width: 1280px) {
    padding: 120px ${Padding.MosidePadding};
  }

  @media screen and (max-width: 1024px) {
    padding: 60px ${Padding.MosidePadding};
  }
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
  margin-bottom: 15px;

  @media screen and (max-width: 860px) {
    height: 40px;
  }

  @media screen and (max-width: 680px) {
    font-size: 18px;
    margin-bottom: 10px;
  }

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

    @media screen and (max-width: 860px) {
      font-size: 20px;
    }

    @media screen and (max-width: 680px) {
      font-size: 18px;
    }
  }

  button {
    all: unset;
    color: #fff;
    font-size: 30px;
    margin-right: 15px;
    cursor: pointer;
    &:hover {
      color: ${colors.point};
    }

    @media screen and (max-width: 680px) {
      font-size: 25px;
      margin-right: 10px;
    }
  }
`;

const Con = styled.div`
  margin-top: 40px;
  p {
    font-size: 16px;
    margin-top: 15px;
    line-height: 20px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 20px;

  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 15px;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 10px;
    font-size: 15px;
  }
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  margin-left: 15px;
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    const { results } = await SearchData(keyword);
    setSearchData(results);
    setIsLoading(false);
  };

  console.log(searchData);

  return (
    <Container>
      <PageTitle title={"Search"} />
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
      </Form>
      <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      <ConWrap>
        {searchData?.length === 0 ? (
          "검색결과가 없습니다"
        ) : (
          <>
            {searchData && (
              <>
                {isLoading ? (
                  <Loading />
                ) : (
                  <>
                    {searchData.map((data) => (
                      <Con key={data.id}>
                        {data.poster_path ? (
                          <Link to={`/detail/${data.id}`}>
                            <img src={`${imgUrl.w500Url}${data.poster_path}`} />
                            <p>{data.title}</p>
                          </Link>
                        ) : (
                          <Link to={`/detail/${data.id}`}>
                            <img src="https://media.istockphoto.com/id/1216251206/ko/%EB%B2%A1%ED%84%B0/%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%86%EC%9D%8C-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?s=170667a&w=0&k=20&c=4oSjH5ISBPZbUQ0JFdkkag7FL4Hy60JnAxOugt5g29g=" />
                            <p>{data.title}</p>
                          </Link>
                        )}
                      </Con>
                    ))}
                  </>
                )}
              </>
            )}
          </>
        )}
      </ConWrap>
    </Container>
  );
};

// {(data.poster_path && (
//   <>
//     <img
//       src={`${imgUrl.w500Url}${data.poster_path}`}
//       alt={data.title}
//     />
//     <p>{data.title}</p>
//   </>
// )) || (
//   <>
//     <img src="https://media.istockphoto.com/id/1216251206/ko/%EB%B2%A1%ED%84%B0/%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%86%EC%9D%8C-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?s=170667a&w=0&k=20&c=4oSjH5ISBPZbUQ0JFdkkag7FL4Hy60JnAxOugt5g29g=" />
//     <p>{data.title}</p>
//   </>
// )}
