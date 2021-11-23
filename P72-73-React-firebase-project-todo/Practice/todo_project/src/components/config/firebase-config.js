import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBMT5PVhz-kJ8VKZUN6bq3CI6Kp8RnSNpU",
	authDomain: "personaltodo-b0b8f.firebaseapp.com",
	projectId: "personaltodo-b0b8f",
	storageBucket: "personaltodo-b0b8f.appspot.com",
	messagingSenderId: "562804725023",
	appId: "1:562804725023:web:f7d0920144c8a96e804c2a"
};

export const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb)