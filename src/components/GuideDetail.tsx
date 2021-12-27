import React, { useEffect } from "react";
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setSelectedGuideImageSrc, setSelectedGuideName } from '../actions/GuideActions';
import { getStorage } from '../firebase';
import { RootState } from '../store';

const GuideDetail = () => {
    const dispatch = useDispatch();
    const {selectedGuideName, selectedGuideImageSrc} = useSelector((state: RootState) => state.guide)
    
    const getImageSrc = useCallback(async () => {
        const storage = await getStorage();
        if (selectedGuideName) {
            const imageSrc = await storage.ref(`1/${selectedGuideName}`).getDownloadURL();
            dispatch(setSelectedGuideImageSrc(imageSrc));
        }
    }, [dispatch, selectedGuideName])

    useEffect(() => {
        const locationSplit = window.location.href.split("/");
        dispatch(setSelectedGuideName(locationSplit[locationSplit.length - 1]));
        getImageSrc();
    }, [getImageSrc, selectedGuideName, dispatch])

    return <GuideDetailLayout>
        <GuideEmergencyWrapper>
            {selectedGuideImageSrc && <GuideDetailImage src={selectedGuideImageSrc} alt={``} ></GuideDetailImage>}
            <EmergencyInformationImage src={process.env.PUBLIC_URL +`/emergency_information.png`} alt={``} ></EmergencyInformationImage>
        </GuideEmergencyWrapper>
        <SososimLayout>
            <SososimImage src={process.env.PUBLIC_URL + `/extinguisher.png`} alt={``} />
            <SososimImage src={process.env.PUBLIC_URL + `/fireplug.png`} alt={``} />
            <SososimImage src={process.env.PUBLIC_URL + `/cpr.png`} alt={``} />
            <h3>포항북부소방서와 롯데백화점 포항점은 함께 합니다.</h3>
        </SososimLayout>
    </GuideDetailLayout>
}

const GuideDetailLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media only screen and (max-width : 600px) {
        display: flex;
        flex-direction: column;
    }
`

const GuideEmergencyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap : 10px;

    @media only screen and (max-width : 600px) {
        display: flex;
        height: 100%;
    }
`

const GuideDetailImage = styled.img`
    @media only screen and (max-width : 600px) {
        display: flex;
        width: 100%;
    }
`

const EmergencyInformationImage = styled.img`
    @media only screen and (max-width : 600px) {
        display: flex;
        width: 100%;
        height: 10%
    }
`

const SososimLayout = styled.div`
    @media only screen and (max-width : 600px) {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

const SososimImage = styled.img`
    width: 60%;
    height: 60%;
    @media only screen and (max-width : 600px) {
        width: 100%;
        height: 100%;
    }
`

export default GuideDetail;