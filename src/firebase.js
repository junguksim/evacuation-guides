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

export const downloadGuideImageByFloor = async (floor) => {
  const storage = firebase.storage();
  const pathReference = storage.ref(`1/${floor}.jpg`);
  const url = await pathReference.getDownloadURL();

  const xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.onload = (event) => {
    var blob = xhr.response;
  };
  xhr.open("GET", url);
  xhr.send();
};

export const getStorage = async () => {
  const storage = firebase.storage();

  return storage;
};

export const downloadAllGuidesImage = async () => {
  const storage = firebase.storage();
  const storageRef = storage.ref();

  const list = await storageRef.listAll();
  list.items.forEach(async (imageRef) => {
    const url = await imageRef.getDownloadURL();
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open("GET", url);
    xhr.send();
  });
};
