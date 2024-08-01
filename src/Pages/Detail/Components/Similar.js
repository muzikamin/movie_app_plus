import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { imgUrl } from "../../../Constant/imgUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { SimilarMovie } from "../../../api";
import { Loading } from "../../../Components/Loading";
import { Detail } from "../Detail";

const params = {
  slidesPerView: 4.6,
  spaceBetween: 15,
  breakpoints: {
    860: {
      slidesPerView: 5.6,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 6.6,
      spaceBetween: 20,
    },
  },
};

const SSimilar = styled.div`
  width: 100%;
  margin-top: 50px;
  position: relative;
  z-index: 10;
`;

const Similarh3 = styled.h3`
  font-size: 18px;
  line-height: 26px;
  margin: 20px 0;
`;

const MovieTitle = styled.h3`
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
`;

export const Similar = ({ Moviedata }) => {
  const [isSimilar, setIsSimilar] = useState();
  const [isLoading, SetIsLoading] = useState(true);
  const { id: movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { results: MovieSimilar } = await SimilarMovie(movieId);
        setIsSimilar(MovieSimilar);
        SetIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  console.log(isSimilar);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <SSimilar>
          <Similarh3>
            "{Moviedata.title}" 영화가 마음에 드신다면? 이 영화를 추천드려요 :)
          </Similarh3>
          <Swiper {...params}>
            {isSimilar.map((data, index) => (
              <SwiperSlide key={data.id} virtualIndex={index}>
                <Link to={`/detail/${data.id}`}>
                  {data.poster_path ? (
                    <img
                      src={`${imgUrl.w500Url}${data.poster_path}`}
                      alt={data.title}
                    />
                  ) : (
                    <img src="https://media.istockphoto.com/id/1216251206/ko/%EB%B2%A1%ED%84%B0/%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%86%EC%9D%8C-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?s=170667a&w=0&k=20&c=4oSjH5ISBPZbUQ0JFdkkag7FL4Hy60JnAxOugt5g29g=" />
                  )}
                  <MovieTitle>{data.title}</MovieTitle>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </SSimilar>
      )}
    </>
  );
};
