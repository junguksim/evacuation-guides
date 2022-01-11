import React, { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPlaceId, setPlaceName, setSelectedGuideImageSrc } from "../actions/GuideActions";
import { getUrl } from "../utils";
import { RootState } from "../store";
import DownloadFloatButton from "./DownloadFloatButton";
import Loading from "./Loading";
import useQuery from "../hooks/useQuery";

const GuideDetail = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const { selectedGuideImageSrc, placeName } = useSelector((state: RootState) => state.guide);

  const getImageSrc = useCallback(async () => {
    if (!selectedGuideImageSrc) {
      const placeId = query.get("placeId") as string;
      const fileName = query.get("fileName") as string;
      const placeName = query.get("placeName") as string;
      const imageSrc = await getUrl(placeId, fileName);
      dispatch(setPlaceId(placeId));
      dispatch(setPlaceName(placeName));
      dispatch(setSelectedGuideImageSrc(imageSrc));
    }
  }, [dispatch, selectedGuideImageSrc, query]);

  useEffect(() => {
    getImageSrc();
  }, [getImageSrc]);

  return (
    <>
      {!selectedGuideImageSrc && <Loading />}
      {selectedGuideImageSrc && (
        <>
          <GuideDetailLayout>
            <GuideEmergencyWrapper>
              <GuideDetailImage src={selectedGuideImageSrc} alt={``}></GuideDetailImage>
              <EmergencyInformationImage src={process.env.PUBLIC_URL + `/emergency_information.png`} alt={``}></EmergencyInformationImage>
            </GuideEmergencyWrapper>
            <SososimLayout>
              <SososimImage src={process.env.PUBLIC_URL + `/extinguisher.png`} alt={``} />
              <SososimImage src={process.env.PUBLIC_URL + `/fireplug.png`} alt={``} />
              <SososimImage src={process.env.PUBLIC_URL + `/cpr.png`} alt={``} />
              <h3>포항북부소방서와 {placeName}은/는 함께 합니다.</h3>
            </SososimLayout>
          </GuideDetailLayout>
          <DownloadFloatButton />
        </>
      )}
    </>
  );
};

const GuideDetailLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const GuideEmergencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media only screen and (max-width: 600px) {
    display: flex;
    height: 100%;
  }
`;

const GuideDetailImage = styled.img`
  @media only screen and (max-width: 600px) {
    display: flex;
    width: 100%;
  }
`;

const EmergencyInformationImage = styled.img`
  @media only screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    height: 10%;
  }
`;

const SososimLayout = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const SososimImage = styled.img`
  width: 60%;
  height: 60%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export default GuideDetail;
