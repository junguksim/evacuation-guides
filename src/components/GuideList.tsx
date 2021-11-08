

import React from "react";
import Guide, { GuideProps } from './Guide';
import "./GuideList.css"

const GuideList = () => {
    const evacuationGuides : GuideProps[] = [
        {
            imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180337.jpg",
            imageAlt : "B1",
            title: "B1층"
        },
        {
            imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180343.jpg",
            imageAlt : "1층",
            title: "1층"
        },
        {
            imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180358.jpg",
            imageAlt : "2층",
            title: "2층"
        },
        {
            imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180410.jpg",
            imageAlt : "2층",
            title: "2층"
        },
        {
            imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180424.jpg",
            imageAlt : "3층",
            title: "3층"
        },
        {
            imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180439.jpg",
            imageAlt : "4층",
            title: "4층"
        },
        {
            imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180449.jpg",
            imageAlt : "5층",
            title: "5층"
        },
        {
            imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180502.jpg",
            imageAlt : "6층",
            title: "6층"
        },
        {
            imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180524.jpg",
            imageAlt : "7층",
            title: "7층"
        },
        {
            imageSrc: "https://evacuation-guides.s3.ap-northeast-2.amazonaws.com/211101180538.jpg",
            imageAlt : "8층",
            title: "8층"
        },
    ]

    return <div className={`guide-list`}>
        {evacuationGuides.map((evacuationGuide) => {
            return <Guide {...evacuationGuide}/>
        })}
    </div>
}

export default GuideList;