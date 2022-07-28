import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body::-webkit-scrollbar {
            display: none;
        }
    html {
      scroll-behavior: smooth;
      -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    
    :root {
      --pink: #F408F4;
      --white: #F9F9F9;
      --black: #161616;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar {
            display: none;
        }
    }
    body {
        background-color: var(--white);
        color: var(--pink);
        font-family: var(--regular);
        font-size: 14px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        @media (max-width: 680px) {
          font-size: 12px;
      }
    }
`