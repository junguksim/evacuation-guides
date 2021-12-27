import React from "react";
import styled from "styled-components";

const Loading = () => {
    return <LoadingPageLayout>
        <LoadingStatement>불러오는 중입니다...</LoadingStatement>
    </LoadingPageLayout>
}
const LoadingPageLayout = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const LoadingStatement = styled.h2`
    display: flex;
`


export default Loading;