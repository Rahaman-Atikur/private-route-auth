import React from 'react';
import { AuthContext } from '../main';

const AuthProvider = ({children}) => {
    const 
    return (
        <div>
            <AuthContext value={userInfo}></AuthContext>
        </div>
    );
};

export default AuthProvider;