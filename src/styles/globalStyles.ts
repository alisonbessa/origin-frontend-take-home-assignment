import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #F2F2F2;
        font-family: 'Work Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
    }
`;
