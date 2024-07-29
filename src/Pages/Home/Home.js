import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import { Loading } from "../../Components/Loading";
import styled from "styled-components";
import { imgUrl } from "../../Constant/imgUrl";
import { Padding } from "../../GlobalStyled";
import "swiper/css";
import { MainBanner } from "./Components/MainBanner";

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

  return <>{isLoading ? <Loading /> : <MainBanner data={popData} />}</>;
};
