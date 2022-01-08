import { Dispatch } from "redux";
import { GuideInfo } from "../reducers/guide";
import { ReduxAction, SET_GUIDES, SET_SELECTED_GUIDE_NAME, SET_SELECTED_GUIDE_IMAGE_SRC, SET_PLACE_ID, SET_ENTIRE_DOWNLOAD_FILE_NAME } from "./actionTypes";

export const setPlaceId = (placeId: string) => (dispatch: Dispatch<ReduxAction>) => {
  dispatch({
    type: SET_PLACE_ID,
    payload: placeId,
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

export const setEntireDownloadFileName = (entireDownloadFileName: string) => (dispatch: Dispatch<ReduxAction>) => {
  dispatch({
    type: SET_ENTIRE_DOWNLOAD_FILE_NAME,
    payload: entireDownloadFileName,
  });
};
