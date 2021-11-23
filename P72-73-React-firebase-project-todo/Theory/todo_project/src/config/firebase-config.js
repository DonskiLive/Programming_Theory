//import firebase from "firebase/compat";
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };


export const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb)