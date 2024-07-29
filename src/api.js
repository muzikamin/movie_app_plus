const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzNkZTVjM2U5MTcyZjIwYTEwZWFiOGU3MmQ3MjFlMyIsIm5iZiI6MTcyMTk3OTk1OS44OTE2MSwic3ViIjoiNjY4Zjk2NTBkOGJlOGU0ZmFlYTdhMDNkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.04QMEChq8TkYfNXe5YO6KWWmKoQJ7zynP35DUOzCzes",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upComing = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());