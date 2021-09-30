import { createGlobalStyle } from 'styled-components';
import PoppinsLight from '../assets/fonts/Poppins-Light.ttf';
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf';
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf';
import PoppinsBoldItalic from '../assets/fonts/Poppins-BoldItalic.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Poppins Light';
    src: url(${PoppinsLight});
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: 'Poppins Regular';
    src: url(${PoppinsRegular});
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Poppins BoldItalic';
    src: url(${PoppinsBoldItalic});
    font-style: italic;
    font-weight: 700;
  }
  @font-face {
    font-family: 'Poppins Bold';
    src: url(${PoppinsBold});
    font-style: normal;
    font-weight: 700;
  }
  html{
    font-family: 'Poppins Regular';
    color: var(--text-color);
  }
  *{
    font-family: 'Poppins Regular';
    color: var(--text-color);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Poppins Bold'
  }

`;

export default Typography;
