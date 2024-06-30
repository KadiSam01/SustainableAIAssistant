import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, provider } from './firebaseConfig';

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => signInWithGoogle(provider);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (user) return <p>Welcome, {user.displayName}</p>;

  return (
    <button onClick={handleGoogleSignIn}>Sign in with Google</button>
  );
};

export default Login;
