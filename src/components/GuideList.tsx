import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEntireDownloadFileName, setGuides, setPlaceId, setPlaceName } from "../actions/GuideActions";
import { RootState } from "../store";
import Guide from "./Guide";
import Loading from "./Loading";
import styled from "styled-components";
import DownloadFloatButton from "./DownloadFloatButton";
import { getAllRef } from "../utils";
import useQuery from "../hooks/useQuery";

const GuideList = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const { guides, placeId } = useSelector((state: RootState) => state.guide);

  const setGuidesInfo = useCallback(async () => {
    if (placeId) {
      try {
        const { entireDownloadFileName, guideInfos } = await getAllRef(placeId);
        dispatch(setEntireDownloadFileName(entireDownloadFileName));
        dispatch(setGuides(guideInfos));
      } catch (e) {
        console.error(e);
      }
    }
  }, [dispatch, placeId]);

  useEffect(() => {
    setGuidesInfo();
  }, [setGuidesInfo]);

  useEffect(() => {
    const placeId = query.get("placeId") as string;
    dispatch(setPlaceId(placeId));
    const placeName = query.get("placeName") as string;
    dispatch(setPlaceName(placeName));
  }, [dispatch, query]);

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
      {guides && guides.length > 0 && <DownloadFloatButton />}
    </>
  );
};

const GuideListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GuideList;
