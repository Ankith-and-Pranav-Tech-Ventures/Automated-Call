// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuWda-_OP1EGkQZ1zgW4GuforEFGwPGsU",
  authDomain: "gemini-api-web-app-a198f.firebaseapp.com",
  projectId: "gemini-api-web-app-a198f",
  storageBucket: "gemini-api-web-app-a198f.appspot.com",
  messagingSenderId: "59060039408",
  appId: "1:59060039408:web:b2d3428e6f5f2e39d45c35",
  measurementId: "G-4K8YJHQMW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth }