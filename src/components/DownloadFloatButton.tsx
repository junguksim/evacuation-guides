import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { downloadAllGuidesImage, downloadGuideImageByFloor } from '../firebase';

const DownloadFloatButton = () => {

    const [isList, setIsList] = useState<boolean>(false);

    useEffect(() => {
        const locationSplit = window.location.href.split("/");
        setIsList(locationSplit[locationSplit.length - 1] === "guides");
    }, [])

    return <DownloadFloatButtonLayout>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 20 20" onClick={() => {
                    const locationSplit = window.location.href.split("/");
                    if (isList) {
                        downloadAllGuidesImage();
                    } else {
                        downloadGuideImageByFloor(locationSplit[locationSplit.length - 1])
                    }
                }}>
                <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
                <path d="M10 15l5-6h-4V1H9v8H5l5 6z" />
            </svg>
            <h3>다운로드</h3>
        </DownloadFloatButtonLayout>
}

const DownloadFloatButtonLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap : 10px;
    position: fixed;
    right : 10px;
    bottom : 10px;
    border: 1px solid black;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;

    :hover {
        background-color: gray;
    }
`

export default DownloadFloatButton;