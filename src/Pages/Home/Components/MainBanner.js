import styled from "styled-components";
import { imgUrl } from "../../../Constant/imgUrl";
import { colors, Padding } from "../../../GlobalStyled";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

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
  height: 80vh;
  position: relative;
  background: url(${imgUrl.BaseUrl}${(props) => props.$BgUrl}) no-repeat center /
    cover;

  h3 {
    font-size: 45px;
    font-weight: 900;
    margin-bottom: 20px;
  }
  p {
    width: 40%;
    font-size: 20px;
    line-height: 30px;
    opacity: 0.7;
    font-weight: 200;
  }
`;

const Text = styled.div`
  width: 100%;
  position: absolute;
  left: ${Padding.sidePadding};
  bottom: 60px;
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
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SMainBanner $BgUrl={data[0].backdrop_path}>
            <BlackBg />
            <Text>
              <h3>{data[0].title}</h3>
              <p>{data[0].overview.slice(0, 120) + "..."}</p>
            </Text>
          </SMainBanner>
        </SwiperSlide>
        <SwiperSlide>
          <SMainBanner $BgUrl={data[1].backdrop_path}>
            <BlackBg />
            <Text>
              <h3>{data[1].title}</h3>
              <p>{data[1].overview.slice(0, 120) + "..."}</p>
            </Text>
          </SMainBanner>
        </SwiperSlide>
        <SwiperSlide>
          <SMainBanner $BgUrl={data[2].backdrop_path}>
            <BlackBg />
            <Text>
              <h3>{data[2].title}</h3>
              <p>{data[2].overview.slice(0, 120) + "..."}</p>
            </Text>
          </SMainBanner>
        </SwiperSlide>
      </Swiper>
    </SwiperStyle>
  );
};
