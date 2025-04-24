/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(loading, user);
    // console.log(user)
    // const user = "Jharul Islam";

    const signupUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        signOut(auth)
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
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;