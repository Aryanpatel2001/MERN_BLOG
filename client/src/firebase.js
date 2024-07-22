// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a0484.firebaseapp.com",
  projectId: "mern-blog-a0484",
  storageBucket: "mern-blog-a0484.appspot.com",
  messagingSenderId: "615065148578",
  appId: "1:615065148578:web:14511331d2746ca7c1cbfb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
