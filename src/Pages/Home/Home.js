import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import { Loading } from "../../Components/Loading";
import styled from "styled-components";
import "swiper/css";
import { MainBanner } from "./Components/MainBanner";
import { Movies } from "./Components/Movies";
import { MoviesRank } from "./Components/MoviesRank";
import { PageTitle } from "../../Components/PageTItle";

const Container = styled.div`
  width: 100%;
`;

export const Home = () => {
  const [nowData, SetNowDate] = useState();
  const [popData, SetPopDate] = useState();
  const [topData, SetTopDate] = useState();
  const [upData, SetUpDate] = useState();
  const [isLoading, SetisLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowresults } = await nowPlaying();
        const { results: popresults } = await popular();
        const { results: topresults } = await topRated();
        const { results: upresults } = await upComing();
        SetNowDate(nowresults);
        SetPopDate(popresults);
        SetTopDate(topresults);
        SetUpDate(upresults);

        SetisLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  console.log(popData);
  console.log(topData);
  console.log(upData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <PageTitle title={"HOME"} />
          <MainBanner data={popData} />

          <MoviesRank title="오늘의 TOP시리즈" movieData={popData} />
          <Movies title="상영 중 영화" movieData={nowData} />
          <MoviesRank title="최고의 평점" movieData={topData} />
          <Movies title="개봉예정작" movieData={upData} />
        </Container>
      )}
    </>
  );
};
