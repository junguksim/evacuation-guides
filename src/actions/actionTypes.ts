export interface ReduxAction {
  type: string;
  payload: any;
}
export const SET_PLACE_ID = "SET_PLACE_ID";
export const SET_PLACE_NAME = "SET_PLACE_NAME";
export const SET_SELECTED_GUIDE_NAME = "SET_SELECTED_GUIDE_NAME";
export const SET_SELECTED_GUIDE_IMAGE_SRC = "SET_SELECTED_GUIDE_IMAGE_SRC";
export const SET_GUIDES = "SET_GUIDES";
export const SET_ENTIRE_DOWNLOAD_FILE_NAME = "SET_ENTIRE_DOWNLOAD_FILE_NAME";
