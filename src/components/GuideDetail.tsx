import React, { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setPlaceId, setSelectedGuideImageSrc } from "../actions/GuideActions";
import { RootState } from "../store";
import DownloadFloatButton from "./DownloadFloatButton";
import Loading from "./Loading";
import useQuery from "../hooks/useQuery";
import { allGuideInfo } from "../allGuideInfo";

const GuideDetail = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const { selectedGuideImageSrc } = useSelector((state: RootState) => state.guide);

  const getImageSrc = useCallback(async () => {
    if (!selectedGuideImageSrc) {
      const placeId = query.get("placeId") as string;
      const floorName = query.get("fileName") as string;
      const { guideInfos } = allGuideInfo[parseInt(placeId) - 1];
      const floorInfo = guideInfos.filter((guideInfo) => {
        console.log(floorName, guideInfo.name);
        return guideInfo.name === floorName;
      });
      const { imageSrc } = floorInfo[0];
      dispatch(setPlaceId(placeId));
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
            </SososimLayout>
          </GuideDetailLayout>
          <DownloadFloatButton url={selectedGuideImageSrc} fileName={query.get("fileName") as string} />
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
