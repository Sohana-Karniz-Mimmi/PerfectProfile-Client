// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOMF-SViTyX9pkXitnbNQ_1t1dn-bojhE",
  authDomain: "perfectprofile-ebde4.firebaseapp.com",
  projectId: "perfectprofile-ebde4",
  storageBucket: "perfectprofile-ebde4.appspot.com",
  messagingSenderId: "442789089074",
  appId: "1:442789089074:web:9dda5bc3e203d7d300512b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
