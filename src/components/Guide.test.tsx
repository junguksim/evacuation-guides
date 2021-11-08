import { getByAltText, render } from '@testing-library/react';
import React from 'react';
import Guide, { GuideProps } from './Guide';

describe("<Guide />", () => {
    const sampleGuideProps : GuideProps = {
        imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180337.jpg",
        imageAlt : "B1",
        title: "B1층"
    }

    const setup = () => {
        const utils = render(<Guide {...sampleGuideProps}/>)
        const title = utils.getByText(sampleGuideProps.title);
        const imageAlt = utils.getByAltText(sampleGuideProps.imageAlt);

        return {
            ...utils,title,imageAlt
        }
    }

    it("has image and title", () => {
        setup();
    })
})