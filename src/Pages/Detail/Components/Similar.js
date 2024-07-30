import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { imgUrl } from "../../../Constant/imgUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { SimilarMovie } from "../../../api";
import { Loading } from "../../../Components/Loading";

const params = {
  slidesPerView: 2.6,
  spaceBetween: 15,
  breakpoints: {
    860: {
      slidesPerView: 4.6,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5.6,
      spaceBetween: 20,
    },
  },
};

const SSimilar = styled.div`
  margin-top: 50px;

  h3 {
    font-size: 18px;
    margin: 20px 0;
  }
`;

const ImgWrap = styled.div``;

const MovieTitle = styled.h3`
  font-size: 16px;
  line-height: 22px;
  margin: 15px 0;
`;

export const Similar = ({ Moviedata }) => {
  const [isSimilar, setIsSimilar] = useState();
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: MovieSimilar } = await SimilarMovie(533535);
        setIsSimilar(MovieSimilar);
        SetIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(isSimilar);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <SSimilar>
          <h3>
            "{Moviedata.title}" 영화가 마음에 드신다면? 이 영화를 추천드려요 :)
          </h3>
          <Swiper {...params}>
            {isSimilar.map((data, index) => (
              <SwiperSlide key={data.id} virtualIndex={index}>
                <Link to={`detail/${data.id}`}>
                  <ImgWrap>
                    <img
                      src={`${imgUrl.w500Url}${data.poster_path}`}
                      alt={data.title}
                    />
                  </ImgWrap>
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
