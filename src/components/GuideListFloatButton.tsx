import React from 'react';
import { lotteEvacuationGuides } from '../lotteEvacuationGuides';

const AWS = require('aws-sdk')

const GuideListFloatButton = () => {
    const s3 = new AWS.S3(
        {
            accessKeyId: "AKIAZRSRA5DE4KP4XMCR",
            secretAccessKey: "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"
        })
    
    let downloadImage = async (url: string,) => {
        let urlArray = url.split("/")
        let key = urlArray[3]        
        let params = {Bucket: "evacuation-guides", Key: key}
        return new Promise((resolve) => {
            s3.getObject(params, (err: any, data: any) => {
                let blob = new Blob([data.Body], { type: data.ContentType });
                resolve(blob);
            })
        }).then((blob : any) => {
            return blob;
        })
    }
    
    const actualDownload = async (blob : Blob,  title : string) => {
        let link=document.createElement('a');
        link.href=window.URL.createObjectURL(blob);
        link.download= title;
        link.click();
    }
    
    const onClick = async () => {
        for (const {imageSrc, title} of lotteEvacuationGuides) {
            const blob = await downloadImage(imageSrc);
            await actualDownload(blob, title);
        }
    }

    return <div className={`guide-list-float-button`} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20 20">
        <title>
        download
        </title>
        <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z"/>
        <path d="M10 15l5-6h-4V1H9v8H5l5 6z"/>
        </svg>

    </div>
}

export default GuideListFloatButton;