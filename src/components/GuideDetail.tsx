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
        <div className='guide-emergency-wrapper'>
            <img className={`guide-detail-image`} src={process.env.PUBLIC_URL +`/${selectedGuideId}.jpg`} alt={``} ></img>
            <img className={`emergency-information-image`} src={process.env.PUBLIC_URL +`/emergency_information.png`} alt={``} ></img>
        </div>
        <div className='so-so-sim'>
            <img src={process.env.PUBLIC_URL + `/cpr.png`} alt={``} />
            <img src={process.env.PUBLIC_URL + `/extinguisher.png`} alt={``} />
            <img src={process.env.PUBLIC_URL + `/fireplug.png`} alt={``} />
            <h2>포항북부소방서와 롯데백화점 포항점은 함께 합니다.</h2>
        </div>
    </div>
}

export default GuideDetail;