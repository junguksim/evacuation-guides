import { ReduxAction, SET_GUIDES, SET_SELECTED_GUIDE_NAME, SET_SELECTED_GUIDE_IMAGE_SRC, SET_PLACE_ID, SET_ENTIRE_DOWNLOAD_URL, SET_PLACE_NAME } from "../actions/actionTypes";

export interface GuideInfo {
  imageSrc: string;
  name: string;
}
export interface GuideState {
  placeId: null | string;
  placeName: null | string;
  selectedGuideName: null | string;
  selectedGuideImageSrc: null | string;
  guides: null | GuideInfo[];
  entireDownloadUrl: null | string;
}
const initialState: GuideState = {
  placeId: null,
  placeName: null,
  selectedGuideName: null,
  selectedGuideImageSrc: null,
  guides: null,
  entireDownloadUrl: null,
};

const guide = (state = initialState, action: ReduxAction): GuideState => {
  switch (action.type) {
    case SET_ENTIRE_DOWNLOAD_URL:
      return {
        ...state,
        entireDownloadUrl: action.payload,
      };
    case SET_PLACE_ID:
      return {
        ...state,
        placeId: action.payload,
      };
    case SET_PLACE_NAME:
      return {
        ...state,
        placeName: action.payload,
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
