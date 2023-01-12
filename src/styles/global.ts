import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    text-decoration:none;
  }

  :root {
    --orange: #b15037;
    --green: #5b6339;
    --bege: #e7ceb5;
    --ice: #f5f2ef;

    --grey0: #000000;
    --grey1: #212529;
    --grey2: #495057;
    --grey3: #868E96;
    --grey4: #ADB5BD;

    --inter: 'Inter', sans-serif;
    --lexend: 'Lexend', sans-serif;
  }

  body {
    min-width: 100%;
    min-height: 100vh;
    background-color: var(--whiteFixed);
  }

  html{
    scroll-behavior: smooth;
  }

  button, div, label, select, h1, h2, h3, h4, h5, h6, input, nav, ul, li {
    font-family: var(--lexend);
    color: var(--grey2);
  }
`;
