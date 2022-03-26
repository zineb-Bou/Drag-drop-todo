import React, { useState, useEffect, useContext, createContext } from 'react';
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { app } from './firebase';
import { createUser } from './bd';
const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

export const authenticate = getAuth(app);

const formatUser = (user) => {
  // const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    //token,
  };
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      // const { token, ...userWithoutToken } = user;
      createUser(user.uid, user);
      setUser(user);
      setLoading(false);
      return user;
    } else {
      setUser(false); // cookie.remove('fast-feedback-auth');
      setLoading(false);
      return false;
    }
  };

  //Function sign in with github
  const signinWithGitHub = () => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    // provider.addScope('repo');
    // provider.setCustomParameters({
    //   allow_signup: 'false',
    // });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        //  const token = credential.accessToken;
        // The signed-in user info.
        // const user = formatUser(result.user);
        setLoading(true);
        handleUser(result.user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  //Fucntion sign in with google
  const signinWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      setLoading(true);
      handleUser(result.user);
      // ...
    });
  };
  //Function sign out
  const signout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    signinWithGitHub,
    signinWithGoogle,
    signout,
  };
}
