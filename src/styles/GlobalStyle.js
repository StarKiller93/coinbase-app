import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;

    --header-height: 13.4rem;

  /*========== Colors ==========*/

  --white: #fff;

  --hero-gradient: linear-gradient(174.48deg, #fd749b -12.41%, #281ac8 88.56%);
  --btn-gradient: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  --rates-gradient: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  --footer-bg: #151515;

  --text-color: #333333;
  --text-color-1: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);

  /*========== Font and typography ==========*/
  --body-font: "Poppins", sans-serif;

  --biggest-font-size: 4rem;
  --bigger-font-size: 2.8rem;
  --big-font-size: 2.4rem;
  --smaller-font-size: 1.8rem;
  --small-font-size: 1.4rem;
  --smallest-font-size: 1.2rem;
  --normal-font-size: 1.6rem;
  }
  html{
    font-size: 10px;
    font-family: 'Poppins Regular';
    scroll-behavior: smooth;
    font-size: 62.5%;
    overflow-x: hidden;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 120rem;
    padding: 0 1.5rem;
    margin: 0 auto;
  }

  .grid {
  display: grid;

  &:not(:last-child) {
    margin-bottom: 9.6rem;
  }
}

.grid--2-cols {
  grid-template-columns: repeat(2, 1fr);
}
.grid--3-cols {
  grid-template-columns: repeat(3, 1fr);
}
.grid--4-cols {
  grid-template-columns: repeat(4, 1fr);
}

.grid--5-cols {
  grid-template-columns: repeat(5, 1fr);
}

.grid--center-v {
  align-items: center;
}

// (Smaller Desktop) Below 1232px / 16px
@media (max-width: 77em) {
  .container {
    max-width: 115rem;
  }

}

// (Landscape Tablets) Below 1120px / 16px
@media (max-width: 70em) {
  html {
    // 9px / 16px
    font-size: 56.25%;
  }
}

  // (Tablets) Below 920 / 16px
@media (max-width: 57em) {


  html {
    // 8px / 16px
    font-size: 50%;
  }
}

// (Smaller Tablets) Below 704px / 16px
@media (max-width: 44em) {

}

// (Phones) Below 544px / 16px
@media (max-width: 34em) {

}

`;
export default GlobalStyles;
