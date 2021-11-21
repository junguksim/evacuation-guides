import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import "./GuideDetail.css"

const GuideDetail = () => {
    const selectedGuideImageSrc = useSelector((state: RootState) => state.guide.selectedGuideImageSrc)

    return <div className={`guide-detail-wrapper`}>
        <img className={`guide-detail-image`} src={selectedGuideImageSrc as string} alt={``} ></img>
    </div>
}

export default GuideDetail;