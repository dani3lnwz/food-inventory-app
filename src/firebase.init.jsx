import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANI44X1YBGhQL7eIbWebQgS_91mgazf8U",
  authDomain: "food-inventory-app.firebaseapp.com",
  projectId: "food-inventory-app",
  storageBucket: "food-inventory-app.appspot.com",
  messagingSenderId: "1010173243301",
  appId: "1:1010173243301:web:5e330e29783fb2893bc24c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
