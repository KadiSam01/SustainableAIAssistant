import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCfS8bHnZjOcU6wLb9gJX0Fw3wZGfW9p0M",
    authDomain: "webai-1b9a0.firebaseapp.com",
    projectId: "webai-1b9a0",
    storageBucket: "webai-1b9a0.appspot.com",
    messagingSenderId: "443587249730",
    appId: "1:443587249730:web:7e0e7d0a0e6b0f4a6c8b7b"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();
}