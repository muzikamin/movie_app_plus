import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../Constant/imgUrl";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, Padding } from "../../../GlobalStyled";

const Section = styled.div`
  padding: 160px 0 80px ${Padding.sidePadding};
  position: relative;
  overflow: hidden;

  .Container {
    overflow: visible;
  }

  @media screen and (max-width: 1280px) {
    padding: 120px 0 60px ${Padding.MosidePadding};
  }

  @media screen and (max-width: 1024px) {
    padding: 60px 0 30px ${Padding.MosidePadding};
  }
`;

const Index = styled.h3`
  position: absolute;
  bottom: -40px;
  left: -20px;
  font-weight: 900;
  font-style: italic;
  font-size: 13vw;
  -webkit-text-stroke: 2px #fff;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: -15px;

  @media screen and (max-width: 1280px) {
    left: -10px;
  }

  @media screen and (max-width: 860px) {
    font-size: 15vw;
    bottom: -20px;
    left: -10px;
  }

  @media screen and (max-width: 680px) {
    -webkit-text-stroke: 1px #fff;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 24vw;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1280px) {
    height: 30vw;
  }

  @media screen and (max-width: 860px) {
    height: 50vw;
  }
`;

const Title = styled.h3`
  font-size: 46px;
  font-weight: 700;
  margin: 40px 0;

  @media screen and (max-width: 1280px) {
    font-size: 32px;
  }

  @media screen and (max-width: 680px) {
    font-size: 26px;
  }
`;

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

export const MoviesRank = ({ title, movieData }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <Swiper className="Container" {...params}>
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
