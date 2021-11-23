import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBNzIFwEv-bKSte4OVJwwM_Ka4h4VqO-BQ",
	authDomain: "booksdb-a718a.firebaseapp.com",
	projectId: "booksdb-a718a",
	storageBucket: "booksdb-a718a.appspot.com",
	messagingSenderId: "803811107731",
	appId: "1:803811107731:web:69c8a3b903edba52cffe66"
};

export const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb)