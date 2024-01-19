
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyADTsYEt7w_nh8Ct4JScnso4HoQhSw2KRE",
  authDomain: "namaste-you-tube.firebaseapp.com",
  projectId: "namaste-you-tube",
  storageBucket: "namaste-you-tube.appspot.com",
  messagingSenderId: "239024009434",
  appId: "1:239024009434:web:89f5f518bbd355ee02f5e3",
  measurementId: "G-B79F2RR7DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

