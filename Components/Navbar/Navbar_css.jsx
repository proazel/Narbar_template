import styled from 'styled-components';

export const NavbarCss = styled.div`
    display: flex;
    flex-direction: row;
    background: rgb(247, 248, 250);

    /* navbarContainer */
    & > div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export const HeaderWrap = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    width: 1440px;
    padding: 16px 30px;
    font-size: 18px;
    color: gray;
    background: #0B0D12;

    & > div {
        display: flex;
        flex-direction: row;
    }

    /* logo */
    & > #logo {
        width: 50%;
        align-items: center;
    }
    & > #logo > span {
        transition: 0.75s;
    }
    & > #logo > span:hover {
        transform: rotate(-20deg);
        transition: 0.75s;
    }

    /* menu */
    & > #menu {
        width: 40%;
        padding: 10px 0;
        justify-content: right;
    }

    /* menuname */
    & > #menu > div > .menuname {
        padding: 0 20px;
        font-weight: 600;
        color: gray;
        letter-spacing: -0.5px;
        cursor: pointer;
        transition: 0.75s;
    }
    & > #menu > div > .menuname:hover {
        color: #fff;
        transition: 0.75s;
    }
    & > #menu > div > .menuname.clicked {
        color: #fff;
    }

    /* dropdown */
    & > #menu > div > .dropdown {
        display: none;
        position: absolute;
        width: 252px;
        top: 76px;
        padding: 10px 0;
        background: radial-gradient(ellipse farthest-side at center top,#283244 0,rgba(21,26,35,.95) 100%);
        border: 1px solid rgba(255,255,255,.15);
        box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%);
        animation: dropdown 0.5s;
        animation-fill-mode: both;
    }
    & > #menu > div > .dropdown.show {
        display: block;
    }
    & > #menu > div > .dropdown > li {
        padding: 10px 20px;
        cursor: pointer;
    }
    & > #menu > div > .dropdown > li:hover {
        color: #fff;
        transition: 0.75s;
    }

    /* util */
    & > #util {
        width: 10%;
        padding: 10px 0;
        color: gray;
        justify-content: center;
        cursor: pointer;
    }

    /* keyframes */
    @keyframes dropdown {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }
`