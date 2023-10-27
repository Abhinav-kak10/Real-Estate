// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-9bb19.firebaseapp.com",
  projectId: "mern-estate-9bb19",
  storageBucket: "mern-estate-9bb19.appspot.com",
  messagingSenderId: "348897633322",
  appId: "1:348897633322:web:dd1d207d5f07a5e8664f53",
  measurementId: "G-30NNVRCYTD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
