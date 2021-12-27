

import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setGuides } from '../actions/GuideActions';
import { getStorage } from '../firebase';
import { GuideInfo } from '../reducers/guide';
import { RootState } from '../store';
import Guide from './Guide';
import Loading from './Loading';
import styled from 'styled-components';

const GuideList = () => {
    const dispatch = useDispatch();
    const { guides } = useSelector((state: RootState) => state.guide)

    const setGuidesInfo = useCallback(async () => {
        const guideInfos: GuideInfo[] = [];
        const storage = await getStorage();
        const placeRef = storage.ref(`1`);
        const placeGuidesList = (await placeRef.listAll()).items;
        for (const guideRef of placeGuidesList) {
            const imageSrc = await guideRef.getDownloadURL();
            guideInfos.push({
                imageSrc,
                imageAlt: '',
                name : guideRef.name
            })
        }
        dispatch(setGuides(guideInfos));
    }, [dispatch])

    useEffect(() => {
        setGuidesInfo();
    }, [setGuidesInfo])

    return <GuideListLayout>
        {(!guides || guides.length === 0) && <Loading /> }
        {guides && guides.length > 0 && guides.map((evacuationGuide, index) => {
            return <Guide {...evacuationGuide} key={index}/>
        })}
    </GuideListLayout>
}

const GuideListLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height : 100%;
    width: 100%;
`

export default GuideList;