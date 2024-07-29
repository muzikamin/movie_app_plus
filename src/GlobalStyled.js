import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#FF0058",
  color: "#fff",
};

export const Padding = {
  sidePadding: "120px",
  MosidePadding: "20px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

* {box-sizing: border-box;}

body {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  background-color: #161616;
  color: ${colors.color};
  letter-spacing: -1px;
  word-break : keep-all
}

a {
  text-decoration: none;
  color: ${colors.color};
}

ul, li {
  list-style: none;
}

`;
