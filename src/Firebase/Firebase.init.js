// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX0aI3np3XY35ItoUDc5-eo5C0SdWCHXQ",
  authDomain: "alinar-online-shop-bd.firebaseapp.com",
  projectId: "alinar-online-shop-bd",
  storageBucket: "alinar-online-shop-bd.appspot.com",
  messagingSenderId: "860932966551",
  appId: "1:860932966551:web:5cec2fd32cc14c95ce41d2",
  measurementId: "G-3CFZ6EB947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth; 