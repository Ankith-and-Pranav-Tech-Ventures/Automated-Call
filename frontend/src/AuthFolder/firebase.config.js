// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFsQYAlgKnhi7tenivlmOo_86ZZRsF6kU",
  authDomain: "gemini-api-web-app.firebaseapp.com",
  projectId: "gemini-api-web-app",
  storageBucket: "gemini-api-web-app.appspot.com",
  messagingSenderId: "695894065204",
  appId: "1:695894065204:web:281cd7c953e3f484358a61",
  measurementId: "G-HZ63XMGJ94"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
