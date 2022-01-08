import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEntireDownloadFileName, setGuides, setPlaceId } from "../actions/GuideActions";
import { getStorage } from "../firebase";
import { GuideInfo } from "../reducers/guide";
import { RootState } from "../store";
import Guide from "./Guide";
import Loading from "./Loading";
import styled from "styled-components";
import DownloadFloatButton from "./DownloadFloatButton";

const GuideList = () => {
  const dispatch = useDispatch();
  const { guides } = useSelector((state: RootState) => state.guide);
  const [placeId, setPlaceIdState] = useState<string>("");

  const setGuidesInfo = useCallback(async () => {
    const guideInfos: GuideInfo[] = [];
    const storage = await getStorage();
    const placeRef = storage.ref(placeId);
    const placeGuidesList = (await placeRef.listAll()).items;
    for (const guideRef of placeGuidesList) {
      if (guideRef.name.split(".")[1] === "zip") {
        dispatch(setEntireDownloadFileName(guideRef.name));
        continue;
      }
      if (guideRef.name.split(".")[1] === "jpg" || guideRef.name.split(".")[1] === "png" || guideRef.name.split(".")[1] === "jpeg") {
        const imageSrc = await guideRef.getDownloadURL();
        guideInfos.push({
          imageSrc,
          imageAlt: "",
          name: guideRef.name,
        });
      }
    }
    dispatch(setGuides(guideInfos));
  }, [dispatch, placeId]);

  useEffect(() => {
    setGuidesInfo();
  }, [setGuidesInfo]);

  useEffect(() => {
    const locationSplit = window.location.href.split("/guides");
    setPlaceIdState(locationSplit[0].split("/evacuation-guides/")[1]);
    dispatch(setPlaceId(placeId));
  }, [dispatch, setPlaceIdState, placeId]);

  return (
    <>
      {(!guides || guides.length === 0) && <Loading />}
      <GuideListLayout>
        {guides &&
          guides.length > 0 &&
          guides.map((evacuationGuide, index) => {
            return <Guide {...evacuationGuide} key={index} />;
          })}
      </GuideListLayout>
      {guides && <DownloadFloatButton />}
    </>
  );
};

const GuideListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GuideList;
