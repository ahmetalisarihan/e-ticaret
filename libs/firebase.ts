// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Ep0fMjxfO5DivEB_hTLQDKHWt7BbjvM",
  authDomain: "shop-42918.firebaseapp.com",
  projectId: "shop-42918",
  storageBucket: "shop-42918.appspot.com",
  messagingSenderId: "332921920042",
  appId: "1:332921920042:web:dfc9546486732f66c14153",
  measurementId: "G-CR8KKV8D7J"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;