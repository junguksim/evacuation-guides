import { Dispatch } from 'redux'
import { ReduxAction, SET_SELECTED_GUIDE_ID, SET_SELECTED_GUIDE_IMAGE_SRC } from './actionTypes'

export const setSelectedGuideId = (guideId: string) => (dispatch : Dispatch<ReduxAction>) => {
    dispatch({
        type: SET_SELECTED_GUIDE_ID,
        payload : guideId
    })
}

export const setSelectedGuideImageSrc = (guideImageSrc: string) => (dispatch : Dispatch<ReduxAction>) => {
    dispatch({
        type: SET_SELECTED_GUIDE_IMAGE_SRC,
        payload : guideImageSrc
    })
}