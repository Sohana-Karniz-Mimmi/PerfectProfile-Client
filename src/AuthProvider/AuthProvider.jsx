import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
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
import axios from "axios";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
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
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const twitterSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  // const logOut = async () => {
  //   setLoading(true);
  //   return signOut(auth).then(() => {
  //     axiosPublic.post("/logout", {}, { withCredentials: true }).then(() => {
  //       console.log("Token removed on logout.");
  //     });
  //   });
  // };

  // Sing Out User

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);

  //     if (currentUser) {
  //       const loggedUser = { email: currentUser.email };

  //       axiosPublic
  //         .post("/login", loggedUser, { withCredentials: true })
  //         .then((res) => {
  //           console.log("JWT token received and set in cookies", res.data);
  //         });
  //     } else {
  //       console.log("No user is logged in");
  //     }
  //     console.log("Current user: ", currentUser);
  //   });

  //   return () => unsubscribe();
  // }, [axiosPublic]);

  // onAuthStateChange

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log("save user", currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_LOCALHOST_API_URL}/jwt`, loggedUser, {
            withCredentials: true,
          })
          .then((data) => {
            console.log("token response", data.data);
          });
        // saveUser(currentUser)
      } else {
        axios
          .post(
            `${import.meta.env.VITE_LOCALHOST_API_URL}/logout`,
            loggedUser,
            { withCredentials: true }
          )
          .then((data) => {
            console.log(data.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    updateUserEmail,
    signIn,
    googleSignIn,
    githubSignIn,
    facebookSignIn,
    twitterSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
