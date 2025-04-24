/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(loading, user);
    console.log(user)
    // const user = "Jharul Islam";

    const signupUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const userProfileUpdate = (updatedInfo) =>{
        console.log(updatedInfo);
        return updateProfile(auth.currentUser, updatedInfo);
    }

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
                setUser(currentUser);
                setLoading(false);

            return () =>{
                unSubscribe();
            }
        })
    }, [])

    const authInfo = {
        user,
        signupUser,
        logOut,
        signIn,
        loading,
        userProfileUpdate,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;