import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { downloadAllGuidesImage, downloadGuideImageByFloor } from "../firebase";
import { RootState } from "../store";

const DownloadFloatButton = () => {
  const [isList, setIsList] = useState<boolean>(false);
  const { placeId, entireDownloadFileName } = useSelector((state: RootState) => state.guide);

  useEffect(() => {
    const locationSplit = window.location.href.split("/");
    setIsList(locationSplit[locationSplit.length - 1] === "guides");
  }, [placeId, entireDownloadFileName]);

  const downloadButtonOnclick = useCallback(() => {
    const locationSplit = window.location.href.split("/");
    if (isList) {
      downloadAllGuidesImage(placeId, entireDownloadFileName);
    } else {
      downloadGuideImageByFloor(placeId, locationSplit[locationSplit.length - 1]);
    }
  }, [placeId, isList, entireDownloadFileName]);

  return (
    <DownloadFloatButtonLayout onClick={downloadButtonOnclick}>
      <DownloadFloatButtonSvg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" color="#FFFFFF">
        <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
        <path d="M10 15l5-6h-4V1H9v8H5l5 6z" />
      </DownloadFloatButtonSvg>
      <h3>다운로드</h3>
    </DownloadFloatButtonLayout>
  );
};

const DownloadFloatButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  color: white;
  border: 1px solid #273890;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #273890;

  :hover {
    background-color: gray;
  }
`;

const DownloadFloatButtonSvg = styled.svg`
  fill: #ffffff;
`;

export default DownloadFloatButton;
