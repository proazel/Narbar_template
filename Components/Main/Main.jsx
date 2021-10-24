import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    width: 100%;
    height: 1000px;
    text-align: center;
    padding: 500px;
    margin-bottom: 100px;
`

const Main = () => {
    return (
        <Square>
            스크롤 확인용 메인화면
        </Square>
    );
}

export default Main;