import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }

  * {
 box-sizing: border-box;
}
*:before,
*:after {
 box-sizing: border-box;
}

  body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    color: hsl(0, 20%, 15%);
    max-width: 1200px;
    margin: 0 auto;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: var(--grey);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--black) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }

  .primaryButton {
    border: solid 1px hsl(215, 90%, 45%);
    display: inline-block;
    background-color: hsl(215, 90%, 65%);
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    a {
      color: #fff;
    }
  }
  .primaryButton:hover {
    background-color: hsl(215, 90%, 45%);
  }

`;

export default GlobalStyles;
