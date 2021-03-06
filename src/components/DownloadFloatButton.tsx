import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { downloadFile } from "../utils";
import { useLocation } from "react-router-dom";

const DownloadFloatButton = ({ url, fileName }: { url: string; fileName: string }) => {
  const [isList, setIsList] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    setIsList(location.pathname === "/guides");
  }, [location]);

  const downloadButtonOnclick = useCallback(async () => {
    downloadFile(url, fileName);
  }, [url, fileName]);

  return (
    <DownloadFloatButtonLayout onClick={downloadButtonOnclick}>
      <DownloadFloatButtonSvg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" color="#888888">
        <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" />
        <path d="M10 15l5-6h-4V1H9v8H5l5 6z" />
      </DownloadFloatButtonSvg>
      <h4>{isList ? "전체 다운로드" : "다운로드"}</h4>
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
  color: #ffffff;
  padding: 5px;
  padding: 0px 15px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #5495db;

  :hover {
    background-color: gray;
  }
`;

const DownloadFloatButtonSvg = styled.svg`
  fill: #ffffff;
`;

export default DownloadFloatButton;
