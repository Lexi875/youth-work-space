// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyzqF6FWiPOQC2h4VEt8NQNLruFug2YVs",
  authDomain: "xdevices-bbdef.firebaseapp.com",
  projectId: "xdevices-bbdef",
  storageBucket: "xdevices-bbdef.firebasestorage.app",
  messagingSenderId: "1061088831861",
  appId: "1:1061088831861:web:746f71ed51d3bd54f28b3c",
  measurementId: "G-EJF36B4G8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export default app;