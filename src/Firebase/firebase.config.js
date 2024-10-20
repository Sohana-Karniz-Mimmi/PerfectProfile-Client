// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.evn.VITE_APIKEY,
  authDomain: import.meta.evn.VITE_AUTHDOMAIN,
  projectId: import.meta.evn.VITE_PROJECTID,
  storageBucket: import.meta.evn.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.evn.VITE_MESSAGINGSENDERID,
  appId: import.meta.evn.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
