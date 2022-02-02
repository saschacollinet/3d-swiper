import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    list-style: none;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
}
body {
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;    
}

.swiper {
    width: 60%;
    padding: 50px 0;
}

.swiper-slide {
  width: 28rem !important;
  height: 45rem !important;
  background-color: #181b1d;
  border-radius: 1rem;
  box-shadow: 2rem 2rem 6rem rgba(0, 0, 0, 0.7);
}
`;

export default GlobalStyles;
