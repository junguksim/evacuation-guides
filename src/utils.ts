import axios from "axios";

export const toDataURL = (url: string) => {
  return fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
};

export const downloadFile = async (url: string, name: string) => {
  const a = document.createElement("a");
  a.href = await toDataURL(url);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const getAllRef = async (placeId: string): Promise<{ placeName: string; entireDownloadFileName: string; guideInfos: { imageSrc: string; imageAlt: string; name: string }[] }> => {
  const { data } = await axios.get(`https://oxfwijj0qg.execute-api.ap-northeast-2.amazonaws.com/prod/v1/guides?placeId=${placeId}`);
  return data.body;
};

export const getUrl = async (placeId: string, fileName: string): Promise<string> => {
  const { data } = await axios.get(`https://oxfwijj0qg.execute-api.ap-northeast-2.amazonaws.com/prod/v1/guides?placeId=${placeId}&fileName=${fileName}`);
  return data.body;
};
