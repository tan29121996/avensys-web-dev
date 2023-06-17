import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrXGcPmm2MKdHkp4Oyv_Y_iYhvX4A71Qw",
  authDomain: "data-app-e6b39.firebaseapp.com",
  projectId: "data-app-e6b39",
  storageBucket: "data-app-e6b39.appspot.com",
  messagingSenderId: "1017465784595",
  appId: "1:1017465784595:web:2806e0f158cef900acf2e6"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
