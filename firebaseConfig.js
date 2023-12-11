// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjC7Nc_QdcHubIlioqgZIYeA2LhfhSx1U",
  authDomain: "react-applications-5d814.firebaseapp.com",
  projectId: "react-applications-5d814",
  storageBucket: "react-applications-5d814.appspot.com",
  messagingSenderId: "1021668493533",
  appId: "1:1021668493533:web:309043c351f40f14e87334",
  measurementId: "G-BH2WES00C9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);