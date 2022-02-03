import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { setSelectedGuideName, setSelectedGuideImageSrc } from "../actions/GuideActions";
import { GuideInfo } from "../reducers/guide";
import { RootState } from "../store";

const Guide = ({ imageSrc, name }: GuideInfo) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { placeId, placeName } = useSelector((state: RootState) => state.guide);

  return (
    <GuideLayout
      onClick={() => {
        dispatch(setSelectedGuideName(name));
        dispatch(setSelectedGuideImageSrc(imageSrc));
        navigate(`/detail?placeId=${placeId}&fileName=${name}&placeName=${placeName}`);
      }}
    >
      <GuideThumbnail alt={name} src={imageSrc}></GuideThumbnail>
      <TouchScreenImage alt={""} src={process.env.PUBLIC_URL + "/touch_screen.png"} />
    </GuideLayout>
  );
};

const GuideLayout = styled.div`
  display: flex;
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  margin: 6px;

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 60%;
  }
`;

const GuideThumbnail = styled.img`
  width: 90%;
  height: 80%;
`;

const TouchScreenImage = styled.img`
  width: 70%;
  height: 70%;
`;

export default Guide;
