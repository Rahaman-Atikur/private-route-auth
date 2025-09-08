import React, { useEffect, useState } from 'react';
import { AuthContext } from '../main';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current user inside useEffect on Auth ',
                currentUser
            );
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        user,
        createUser,
        signInUser
    }
    console.log(userInfo);
    return (
        <div>
            <AuthContext value={userInfo}></AuthContext>
            {children}
        </div>
    );
};
export default AuthProvider;