import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3aR7PT3yGNHSBdg9DWvMlWHfYiAfZoqM", 
  authDomain: "amazantian-228bd.firebaseapp.com", 
  projectId: "amazantian-228bd", 
  storageBucket: "amazantian-228bd.firebasestorage.app", 
  messagingSenderId: "477255960232", 
  appId: "1:477255960232:web:b633f696d2049545ffa49d", 
  measurementId: "G-8THFXEL8LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app); 
const storage = getStorage(app);

export { db, storage };
