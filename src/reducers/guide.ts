import { ReduxAction, SET_GUIDES, SET_SELECTED_GUIDE_NAME, SET_SELECTED_GUIDE_IMAGE_SRC, SET_PLACE_ID, SET_ENTIRE_DOWNLOAD_FILE_NAME } from "../actions/actionTypes";

export interface GuideInfo {
  imageSrc: string;
  imageAlt: string;
  name: string;
}
export interface GuideState {
  placeId: null | string;
  selectedGuideName: null | string;
  selectedGuideImageSrc: null | string;
  guides: null | GuideInfo[];
  entireDownloadFileName: null | string;
}
const initialState: GuideState = {
  placeId: null,
  selectedGuideName: null,
  selectedGuideImageSrc: null,
  guides: null,
  entireDownloadFileName: null,
};

const guide = (state = initialState, action: ReduxAction): GuideState => {
  switch (action.type) {
    case SET_ENTIRE_DOWNLOAD_FILE_NAME:
      return {
        ...state,
        entireDownloadFileName: action.payload,
      };
    case SET_PLACE_ID:
      return {
        ...state,
        placeId: action.payload,
      };
    case SET_SELECTED_GUIDE_NAME:
      return {
        ...state,
        selectedGuideName: action.payload,
      };
    case SET_SELECTED_GUIDE_IMAGE_SRC:
      return {
        ...state,
        selectedGuideImageSrc: action.payload,
      };
    case SET_GUIDES:
      return {
        ...state,
        guides: action.payload,
      };
    default:
      return state;
  }
};

export default guide;
