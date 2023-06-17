import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLULxEq2L7tj7OQXJDZMaNzRBRGCGEWGM",
  authDomain: "authentication-app-c5dff.firebaseapp.com",
  projectId: "authentication-app-c5dff",
  storageBucket: "authentication-app-c5dff.appspot.com",
  messagingSenderId: "699408207736",
  appId: "1:699408207736:web:75dc446985b7028781028d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };