// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const APIKEY = process.env.apiKey
const AUTHDOMAIN = process.env.authDomain
const PROJECTID = process.env.projectId
const STORAGEBUCKET = process.env.storageBucket
const MESSAGINGSENDERID = process.env.messagingSenderId
const APPID = process.env.appId

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);