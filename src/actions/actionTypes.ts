export interface ReduxAction {
    type: string;
    payload: any;
}
export const SET_SELECTED_GUIDE_ID = "SET_SELECTED_GUIDE_ID"
export const SET_SELECTED_GUIDE_IMAGE_SRC = "SET_SELECTED_GUIDE_IMAGE_SRC"