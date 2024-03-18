
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAfEZgKxK8RyNZ2GeP4qIrcRqksdHJ2sMA",
  authDomain: "play-lyst.firebaseapp.com",
  projectId: "play-lyst",
  storageBucket: "play-lyst.appspot.com",
  messagingSenderId: "978014552981",
  appId: "1:978014552981:web:c9a424d487a1d96a712c9c",
  measurementId: "G-PSLRK3BRY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

