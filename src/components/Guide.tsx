import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { setSelectedGuideName, setSelectedGuideImageSrc } from '../actions/GuideActions';
import { GuideInfo } from '../reducers/guide';

const Guide = ({ imageSrc, imageAlt, name }: GuideInfo) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <GuideLayout onClick={() => {
        dispatch(setSelectedGuideName(name));
        dispatch(setSelectedGuideImageSrc(imageSrc));
        navigate(`./${name}`);
    }}>
        <GuideThumbnail alt={imageAlt} src={imageSrc}></GuideThumbnail>
        <TouchScreenImage alt={""} src={process.env.PUBLIC_URL + "/touch_screen.png"}/>
    </GuideLayout>
}

const GuideLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 15px;
    padding: 5px;
    margin: 6px;
    cursor: pointer;

    @media only screen and (min-width : 600px) {
        display: flex;
        flex-direction: column;
        width : 50%;
        height : 60%;
    }
`

const GuideThumbnail = styled.img`
    width: 90%;
    height: 80%;
`

const TouchScreenImage = styled.img`
    width: 70%;
    height: 70%;
`

export default Guide;