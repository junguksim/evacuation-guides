import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWHnNufmc858biN3yTb8VKSu_aEKLGHFI",
  authDomain: "evacuation-guides.firebaseapp.com",
  projectId: "evacuation-guides",
  storageBucket: "evacuation-guides.appspot.com",
  messagingSenderId: "390791888073",
  appId: "1:390791888073:web:f9138cd658af7851172118",
  measurementId: "G-2JTPYZWB9C",
};
firebase.initializeApp(firebaseConfig);

export const getStorage = async () => {
  const storage = firebase.storage();

  return storage;
};
export const toDataURL = (url) => {
  return fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
};

const download = async (url, name) => {
  const a = document.createElement("a");
  a.href = await toDataURL(url);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const downloadGuideImageByFloor = async (placeId, floor) => {
  const storage = firebase.storage();
  const pathReference = storage.ref(`${placeId}/${floor}`);
  const url = await pathReference.getDownloadURL();
  await download(url, pathReference.name);
};

export const downloadAllGuidesImage = async (placeId, entireDownloadFileName) => {
  const storage = firebase.storage();
  const allGuidesZipRef = storage.ref(`${placeId}/${entireDownloadFileName}`);
  const url = await allGuidesZipRef.getDownloadURL();
  await download(url, allGuidesZipRef.name);
};
