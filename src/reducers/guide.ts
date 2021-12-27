import { ReduxAction, SET_GUIDES, SET_SELECTED_GUIDE_NAME, SET_SELECTED_GUIDE_IMAGE_SRC } from '../actions/actionTypes'

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
}
const initialState: GuideState = {
    placeId : null,
    selectedGuideName: null,
    selectedGuideImageSrc: null,
    guides : null,
}

const guide = (state = initialState, action : ReduxAction) : GuideState =>  {
    switch (action.type) {
        case SET_SELECTED_GUIDE_NAME:
            return {
                ...state,
                selectedGuideName : action.payload
            }
        case SET_SELECTED_GUIDE_IMAGE_SRC:
            return {
                ...state,
                selectedGuideImageSrc : action.payload
            }
        case SET_GUIDES:
            return {
                ...state,
                guides : action.payload
            }
        default:
            return state;
    }
}

export default guide;