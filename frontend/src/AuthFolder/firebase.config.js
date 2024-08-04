import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDQqwB6cq8iEOYBI_jsFtQnaSz-a6MdTL8",
  authDomain: "automated-call-9fbcb.firebaseapp.com",
  projectId: "automated-call-9fbcb",
  storageBucket: "automated-call-9fbcb.appspot.com",
  messagingSenderId: "738289007344",
  appId: "1:738289007344:web:c76e3414bc7b00a1982035",
  measurementId: "G-8SH7LE7W8D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };