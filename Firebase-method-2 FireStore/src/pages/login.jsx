import React from 'react';
import { auth, googleAuthProvider } from '../FireStore';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
    
    const handlesubmit = async () => {
        try {
            let user = await signInWithPopup(auth, googleAuthProvider);
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    return (
        <div  align="center">
            <div className="container">
                <button onClick={() => handlesubmit()} className='btn btn-primary'>Sign in</button>
            </div>
        </div>
    );
};

export default Login;
