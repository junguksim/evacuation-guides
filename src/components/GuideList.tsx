

import React from "react";
import { lotteEvacuationGuides } from '../lotteEvacuationGuides';
import Guide, { GuideProps } from './Guide';
import "./GuideList.css"
import GuideListFloatButton from './GuideListFloatButton';

const GuideList = () => {
    return <div className={`guide-list`}>
        {/* <GuideListFloatButton /> */}
        {lotteEvacuationGuides.map((evacuationGuide) => {
            return <Guide {...evacuationGuide}/>
        })}
    </div>
}

export default GuideList;