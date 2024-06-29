import React, { useEffect, useState } from 'react';

const AuthStateListener = () => {
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setcurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {currentUser ? `Welcome, ${currentUser.displayName}` : 'Sign in to continue'}
    </div>
  );
};

export default AuthStateListener;import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const GoogleSignIn = () => {
  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      // Handle successful sign-in
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>Sign in with Google</button>
  );
};


export { GoogleSignIn, AuthStateListener };