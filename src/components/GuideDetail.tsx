import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedGuideId } from '../actions/GuideActions';
import { RootState } from '../store';
import "./GuideDetail.css"

const GuideDetail = () => {
    const dispatch = useDispatch();
    const selectedGuideId = useSelector((state: RootState) => state.guide.selectedGuideId)
    useEffect(() => {
        const locationSplit = window.location.href.split("/");
        dispatch(setSelectedGuideId(locationSplit[locationSplit.length - 1]));
    })

    return <div className={`guide-detail-wrapper`}>
        <img className={`guide-detail-image`} src={process.env.PUBLIC_URL +`/${selectedGuideId}.jpg`} alt={``} ></img>
        <img className={`fire-extinguisher-guide-image`} src={process.env.PUBLIC_URL +`/fire-extinguisher-guide.png`} alt={``}/>
    </div>
}

export default GuideDetail;