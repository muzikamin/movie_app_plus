import { useEffect, useState } from "react";
import { movieDetail, movieMovie, SimilarMovie } from "../../api";
import styled from "styled-components";
import { Loading } from "../../Components/Loading";
import { imgUrl } from "../../Constant/imgUrl";
import { FaPlay } from "react-icons/fa";
import { colors } from "../../GlobalStyled";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";
import { Similar } from "./Components/Similar";

const Wrap = styled.div``;

const Container = styled.div`
  padding: 140px 240px;
  display: flex;
  justify-content: center;
  background: url(${imgUrl.BaseUrl}${(props) => props.$BgUrl}) no-repeat center /
    cover;
  /* position: relative;
  z-index: -99; */
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  backdrop-filter: blur(10px);
  opacity: 0.7;
  /* position: absolute;
  top: 0;
  left: 0;
  z-index: 1; */
`;

const ImgWrap = styled.div`
  width: 40%;
  margin-right: 60px;

  img {
    width: 100%;
    border-radius: 20px;
  }
`;

const Text = styled.div`
  width: 60%;

  P {
    font-size: 20px;
    margin: 15px 0;
  }
`;

const Title = styled.h3`
  font-size: 62px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SubTitle = styled.h3`
  font-size: 22px;
  font-weight: 200;
  opacity: 0.7;
`;

const Keyword = styled.ul`
  display: flex;

  li {
    font-size: 20px;
    border: 1px solid #fff;
    padding: 10px 20px;
    border-radius: 30px;
    margin-right: 15px;
    cursor: pointer;
  }
`;
const Line = styled.div`
  width: 100%;
  border-top: 1px solid #fff;
  opacity: 0.7;
  margin: 40px 0;
`;

const OverView = styled.div`
  font-size: 16px;
  margin-top: 15px;
  font-size: 18px;
  line-height: 26px;
  opacity: 0.7;
  font-weight: 200;
`;

const PlayerBtn = styled.div`
  width: 120px;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.point};
    background-color: ${colors.point};
  }
`;

const Player = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const Detail = () => {
  const { id: movieId } = useParams();

  const [detailData, setDetailData] = useState();
  const [isLoading, SetIsLoading] = useState(true);
  const [isMovie, setIsMovie] = useState();

  console.log(movieId);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);
        const { results: MovieRe } = await movieMovie(movieId);

        setIsMovie(MovieRe[0].key);
        setDetailData(data);
        SetIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(detailData);
  // console.log(isSimilar);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrap>
          {" "}
          <Container $BgUrl={detailData.backdrop_path}>
            {/* <Bg /> */}
            <ImgWrap>
              <img src={`${imgUrl.w500Url}${detailData.poster_path}`} alt="" />
            </ImgWrap>
            <Text>
              <Title>{detailData.title}</Title>
              <SubTitle>{detailData.original_title}</SubTitle>
              <p>
                {detailData.release_date} &#183; {detailData.runtime} 분 &#183;{" "}
                {Math.round(detailData.vote_average)} 점
              </p>
              <Keyword>
                {detailData.genres.map((data) => (
                  <li key={data.id}>{data.name}</li>
                ))}
              </Keyword>
              <Line />
              <OverView>{detailData.overview}</OverView>
              {/* -----------예고편------------------ */}
              <PlayerBtn>
                <FaPlay />
                &nbsp;&nbsp;&nbsp;예고편
              </PlayerBtn>
              <Similar Moviedata={detailData} />
            </Text>

            {/* <Player>
            <Bg />
            <ReactPlayer
              url={`https://www.youtube.com/embed/${isMovie}`}
              playing={``}
              controls={true}
              muted={true}
              width={"100%"}
              height={"100%"}
            />
          </Player> */}
          </Container>
        </Wrap>
      )}
    </>
  );
};
