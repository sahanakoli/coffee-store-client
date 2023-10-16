/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import app from "../firebase/firebase.confiq";


const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        user,
        loading,
        createUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;