import { ReduxAction, SET_SELECTED_GUIDE_ID, SET_SELECTED_GUIDE_IMAGE_SRC } from '../actions/actionTypes'

export interface GuideState {
    placeId: null | string;
    selectedGuideId: null | string;
    selectedGuideImageSrc: null | string;
}
const initialState: GuideState = {
    placeId : null,
    selectedGuideId: null,
    selectedGuideImageSrc : null
}

const guide = (state = initialState, action : ReduxAction) : GuideState =>  {
    switch (action.type) {
        case SET_SELECTED_GUIDE_ID:
            return {
                ...state,
                selectedGuideId : action.payload
            }
        case SET_SELECTED_GUIDE_IMAGE_SRC:
            return {
                ...state,
                selectedGuideImageSrc : action.payload
            }
        default:
            return state;
    }
}

export default guide;