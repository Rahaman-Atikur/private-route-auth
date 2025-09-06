import React from 'react';
import { AuthContext } from '../main';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userInfo = { createUser }
    return (
        <div>
            <AuthContext value={userInfo}></AuthContext>
            {children}
        </div>
    );
};
export default AuthProvider;