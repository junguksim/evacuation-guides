import { Dispatch } from "redux";
import { GuideInfo } from "../reducers/guide";
import { ReduxAction, SET_GUIDES, SET_SELECTED_GUIDE_NAME, SET_SELECTED_GUIDE_IMAGE_SRC, SET_PLACE_ID, SET_PLACE_NAME, SET_ENTIRE_DOWNLOAD_URL } from "./actionTypes";

export const setPlaceId = (placeId: string) => (dispatch: Dispatch<ReduxAction>) => {
  dispatch({
    type: SET_PLACE_ID,
    payload: placeId,
  });
};

export const setPlaceName = (placeName: string) => (dispatch: Dispatch<ReduxAction>) => {
  dispatch({
    type: SET_PLACE_NAME,
    payload: placeName,
  });
};

export const setSelectedGuideName = (guideName: string) => (dispatch: Dispatch<ReduxAction>) => {
  dispatch({
    type: SET_SELECTED_GUIDE_NAME,
    payload: guideName,
  });
};

export const setSelectedGuideImageSrc = (guideImageSrc: string) => (dispatch: Dispatch<ReduxAction>) => {
  dispatch({
    type: SET_SELECTED_GUIDE_IMAGE_SRC,
    payload: guideImageSrc,
  });
};

export const setGuides = (guides: GuideInfo[]) => (dispatch: Dispatch<ReduxAction>) => {
  dispatch({
    type: SET_GUIDES,
    payload: guides,
  });
};

export const setEntireDownloadUrl = (entireDownloadUrl: string) => (dispatch: Dispatch<ReduxAction>) => {
  dispatch({
    type: SET_ENTIRE_DOWNLOAD_URL,
    payload: entireDownloadUrl,
  });
};
