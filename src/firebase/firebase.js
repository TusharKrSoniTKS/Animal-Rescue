import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: 'AIzaSyBVls0hyvz93216qZC4QCwM7HNQzcqbjo0',
  authDomain: 'animal-b21dc.firebaseapp.com',
  projectId: 'animal-b21dc',
  storageBucket: 'animal-b21dc.appspot.com',
  messagingSenderId: '107942792430',
  appId: '1:107942792430:web:1b341f4b7948b4cdeeb7ff',
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
