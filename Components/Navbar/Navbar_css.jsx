import styled from 'styled-components';

export const NavbarCss = styled.div`
    display: flex;
    flex-direction: row;
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
        padding: 0 10px;
        transition: 0.75s;
    }
    & > #logo > span:hover {
        transform: rotate(-20deg);
        transition: 0.75s;
    }

    /* menu */
    & > #menu {
        width: 40%;
        justify-content: right;
    }

    /* menuname */
    & > #menu > .menuname {
        display: flex;
        padding: 10px 20px;
        font-weight: 600;
        color: gray;
        letter-spacing: -0.5px;
        transition: 0.75s;
        cursor: pointer;
    }
    & > #menu > .menuname:hover {
        color: #fff;
        transition: 0.75s;
    }
    & > #menu > .menuname.select {
        color: #fff;
    }

    /* dropdown */
    & > #menu > .menuname > .dropdown {
        display: none;
        position: absolute;
        width: 232px;
        top: 76px;
        padding: 10px 0;
        background: radial-gradient(ellipse farthest-side at center top,#283244 0,rgba(21,26,35,.95) 100%);
        border: 1px solid rgba(255,255,255,.15);
        box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%);
        animation: dropdown 0.5s;
        animation-fill-mode: both;
    }
    & > #menu > .menuname > .dropdown.show {
        display: block;
    }
    & > #menu > .menuname > .dropdown > li {
        padding: 10px 20px;
        color: gray;
    }
    & > #menu > .menuname > .dropdown > li:hover {
        color: #fff;
        transition: 0.75s;
    }

    /* util */
    & > #util {
        width: 10%;
        justify-content: right;
    }

    /* viewMode */
    & > #util > #viewMode {
        display: flex;
        padding: 10px 20px;
        filter: brightness(80%);
        transition: 0.5s;
        cursor: pointer;
    }
    & > #util > #viewMode:hover {
        filter: brightness(120%);
        transition: 0.5s;
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