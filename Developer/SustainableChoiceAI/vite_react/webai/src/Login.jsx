import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // your Firebase config
};

firebase.initializeApp(firebaseConfig);

const Login = React.memo(() => {
  const auth = firebase.auth();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = React.useCallback(() => signInWithGoogle(), [signInWithGoogle]);

  if (loading || error || user) {
    return null;
  }

  return (
    <button onClick={handleGoogleSignIn}>Sign in with Google</button>
  );
});

export default Login;