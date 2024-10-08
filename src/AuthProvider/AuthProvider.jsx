import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hook/useAxiosPublic";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const updateUserEmail = (email) => {
    setLoading(false);
    return updateEmail(auth.currentUser);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const twitterSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth).then(() => {
      axiosPublic.post("/logout", {}, { withCredentials: true }).then(() => {
        console.log("Token removed on logout.");
      });
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        const loggedUser = { email: currentUser.email };

        axiosPublic
          .post("/jwt", loggedUser, { withCredentials: true })
          .then((res) => {
            console.log("JWT token received and set in cookies", res.data);
          });
      } else {
        console.log("No user is logged in");
      }
      console.log("Current user: ", currentUser);
    });

    return () => unsubscribe();
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    updateUserEmail,
    signIn,
    googleSignIn,
    facebookSignIn,
    twitterSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
