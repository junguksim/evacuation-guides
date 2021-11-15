import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setSelectedGuideId, setSelectedGuideImageSrc } from '../actions/GuideActions';
import "./Guide.css";

export interface GuideProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
}
const Guide = ({ imageSrc, imageAlt, title }: GuideProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <div className="guide-wrapper" onClick={() => {
        const imageFileName = imageSrc.split(".com/")[1];
        const imageFileId = imageFileName.split(".jpg")[0];
        dispatch(setSelectedGuideId(imageFileId));
        dispatch(setSelectedGuideImageSrc(imageSrc));
        navigate(`./${imageFileId}`);
    }}>
        <img alt={imageAlt} src={imageSrc} className={`guide-thumbnail`}></img>
        <h3>{title}</h3>
    </div>
}

export default Guide;