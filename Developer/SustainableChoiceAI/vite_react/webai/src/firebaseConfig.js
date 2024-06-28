// src/firebase.js

// Import the initializeApp function from the firebase/app module
import { initializeApp } from "firebase/app";

// Import the getAuth, GoogleAuthProvider, signInWithPopup, and signOut functions from the firebase/auth module
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Define the configuration object with your Firebase project details
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",                      // Your Firebase API key
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",  // Your Firebase project's authentication domain
  projectId: "YOUR_PROJECT_ID",                 // Your Firebase project ID
  storageBucket: "YOUR_PROJECT_ID.appspot.com", // Your Firebase project's storage bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Your Firebase project's messaging sender ID
  appId: "YOUR_APP_ID",                         // Your Firebase project's app ID
  measurementId: "YOUR_MEASUREMENT_ID"          // Your Firebase project's measurement ID (optional)
};

// Initialize Firebase with the configuration object
const app = initializeApp(firebaseConfig);

// Get the authentication instance from Firebase
const auth = getAuth(app);

// Create an instance of the GoogleAuthProvider, which is used for Google sign-in
const provider = new GoogleAuthProvider();

// Export the authentication instance, provider, and authentication methods for use in other parts of your application
export { auth, provider, signInWithPopup, signOut };
