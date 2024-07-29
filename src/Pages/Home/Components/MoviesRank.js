import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../Constant/imgUrl";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, Padding } from "../../../GlobalStyled";

const Section = styled.div`
  padding: 60px ${Padding.sidePadding};
  padding-right: 0;
  position: relative;

  @media screen and (max-width: 1280px) {
    padding: 40px ${Padding.MosidePadding};
    padding-right: 0;
  }

  @media screen and (max-width: 1024px) {
    padding: 20px ${Padding.MosidePadding};
    padding-right: 0;
  }
`;

const Index = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 900;
  font-style: italic;
  font-size: 13vw;
  -webkit-text-stroke: 2px #fff;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: -15px;

  @media screen and (max-width: 860px) {
    font-size: 15vw;
  }

  @media screen and (max-width: 680px) {
    -webkit-text-stroke: 1px #fff;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 24vw;
  margin-bottom: 40px;
  margin-left: 10px;
  display: flex;
  padding-left: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1280px) {
    margin-bottom: 20px;
    height: 30vw;
  }

  @media screen and (max-width: 860px) {
    margin-left: 0;
    height: 50vw;
  }
`;

const Title = styled.h3`
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 40px;

  @media screen and (max-width: 1280px) {
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 680px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;

const params = {
  slidesPerView: 2.6,
  spaceBetween: 5,
  breakpoints: {
    860: {
      slidesPerView: 4.6,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 5.6,
      spaceBetween: 20,
    },
  },
};

export const MoviesRank = ({ title, movieData }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <Swiper {...params}>
        {movieData.map((data, index) => (
          <SwiperSlide key={data.id} virtualIndex={index}>
            <Link to={`detail/${data.id}`}>
              <Index>{index + 1}</Index>
              <ImgWrap>
                <img
                  src={`${imgUrl.w500Url}${data.poster_path}`}
                  alt={data.title}
                />
              </ImgWrap>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
