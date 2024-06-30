// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyo5oX0KUWJ2yFsYP3TB2tn2pHg4CSoTM",
  authDomain: "sustainableai.firebaseapp.com",
  projectId: "sustainableai",
  storageBucket: "sustainableai.appspot.com",
  messagingSenderId: "237102968463",
  appId: "1:237102968463:web:582ebaee7063c4893b8afa",
  measurementId: "G-L2CEZ1L9TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
