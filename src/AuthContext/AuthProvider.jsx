import React from 'react';
import { AuthContext } from '../main';

const AuthProvider = ({ children }) => {
    const userInfo = { email: 'atikur.uk.rahaman@gmail.com' }
    return (
        <div>
            <AuthContext value={userInfo}></AuthContext>
            {children}
        </div>
    );
};

export default AuthProvider;