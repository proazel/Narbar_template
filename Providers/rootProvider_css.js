import { createGlobalStyle } from 'styled-components';

export const BrightMode = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    body {
        width: 100%;
        height: 100%;
        background: #fff;
    }

    body > div {
        width: 1440px;
        margin: 0 auto;
        background: rgb(247, 248, 250);
        box-shadow: 0 0 50px rgb(11 6 4 / 80%), 0 0 100px rgb(11 6 4 / 60%), 0 0 500px rgb(11 6 4 / 30%);
    }
`

export const DarkMode = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    body {
        width: 100%;
        height: 100%;
        background: #000;
    }

    body > div {
        width: 1440px;
        margin: 0 auto;
        background: rgb(247, 248, 250);
        box-shadow: 0 0 50px rgb(11 6 4 / 80%), 0 0 100px rgb(11 6 4 / 60%), 0 0 500px rgb(11 6 4 / 30%);
    }
`