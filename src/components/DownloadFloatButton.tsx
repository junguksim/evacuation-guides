import React from 'react';
import styled from 'styled-components';
import { downloadAllGuidesImage, downloadGuideImageByFloor } from '../firebase';

const DownloadFloatButton = () => {
    return <DownloadFloatButtonSvg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 20 20" onClick={() => {
            const locationSplit = window.location.href.split("/");
            if (locationSplit[locationSplit.length - 1] === "guides") {
                downloadAllGuidesImage();
            } else {
                downloadGuideImageByFloor(locationSplit[locationSplit.length - 1])
            }
        }}>
            <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
            <path d="M10 15l5-6h-4V1H9v8H5l5 6z"/>
        </DownloadFloatButtonSvg>
}

const DownloadFloatButtonSvg = styled.svg`
    position: fixed;
    right : 10px;
    bottom : 10px;
    border: 1px solid black;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;

    :hover {
        background-color: gray;
    }
`

export default DownloadFloatButton;