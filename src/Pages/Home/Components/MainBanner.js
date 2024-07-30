import styled from "styled-components";
import { imgUrl } from "../../../Constant/imgUrl";
import { colors, Padding } from "../../../GlobalStyled";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const SwiperStyle = styled.div`
  .swiper {
    .swiper-pagination {
      &-bullet {
        background: ${colors.point};
      }
    }
  }
`;

const SMainBanner = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;
  background: url(${imgUrl.BaseUrl}${(props) => props.$BgUrl}) no-repeat center /
    cover;

  h3 {
    width: 40%;
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 20px;
    line-height: 55px;

    @media screen and (max-width: 1280px) {
      font-size: 36px;
      line-height: 42px;
    }

    @media screen and (max-width: 680px) {
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 10px;
    }
  }
  p {
    width: 40%;
    font-size: 16px;
    line-height: 30px;
    opacity: 0.7;
    font-weight: 200;

    @media screen and (max-width: 1280px) {
      width: 60%;
      font-size: 15px;
      line-height: 26px;
    }

    @media screen and (max-width: 680px) {
      left: ${Padding.MosidePadding};
      width: 80%;
    }
  }
`;

const Text = styled.div`
  width: 100%;
  position: absolute;
  left: ${Padding.sidePadding};
  bottom: 60px;

  @media screen and (max-width: 1280px) {
    left: ${Padding.MosidePadding};
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 15%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const MainBanner = ({ data }) => {
  return (
    <SwiperStyle>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Link to={`detail/${data[0].id}`}>
            <SMainBanner $BgUrl={data[0].backdrop_path}>
              <BlackBg />
              <Text>
                <h3>{data[0].title}</h3>
                <p>{data[0].overview.slice(0, 120) + "..."}</p>
              </Text>
            </SMainBanner>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`detail/${data[1].id}`}>
            <SMainBanner $BgUrl={data[1].backdrop_path}>
              <BlackBg />
              <Text>
                <h3>{data[1].title}</h3>
                <p>{data[1].overview.slice(0, 120) + "..."}</p>
              </Text>
            </SMainBanner>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`detail/${data[2].id}`}>
            <SMainBanner $BgUrl={data[2].backdrop_path}>
              <BlackBg />
              <Text>
                <h3>{data[2].title}</h3>
                <p>{data[2].overview.slice(0, 120) + "..."}</p>
              </Text>
            </SMainBanner>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`detail/${data[3].id}`}>
            <SMainBanner $BgUrl={data[3].backdrop_path}>
              <BlackBg />
              <Text>
                <h3>{data[3].title}</h3>
                <p>{data[3].overview.slice(0, 120) + "..."}</p>
              </Text>
            </SMainBanner>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`detail/${data[4].id}`}>
            <SMainBanner $BgUrl={data[4].backdrop_path}>
              <BlackBg />
              <Text>
                <h3>{data[4].title}</h3>
                <p>{data[4].overview.slice(0, 120) + "..."}</p>
              </Text>
            </SMainBanner>
          </Link>
        </SwiperSlide>
      </Swiper>
    </SwiperStyle>
  );
};
