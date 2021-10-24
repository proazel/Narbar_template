import wrapper from "../Providers/createCtx";
// import './_app.css';

// pageProps == 서버사이드 렌더링 때문에 사용
const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);