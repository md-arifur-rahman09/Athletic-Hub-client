import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config'
import axios from 'axios';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    //  update profile
    const profileUpdate = (info) => {
        setLoading(true);
        return updateProfile(auth.currentUser, info)
    };

    // login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //login by google account 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    // forget password
    const forgetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };
    // logout user
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    // oserver 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            const email = currentUser?.email

            // generate jwt  token
            axios.post('https://athletic-hub-server-blue.vercel.app/jwt', { email }, {
                withCredentials: true
            })
                .then(res => {
                    // console.log(res.data);
                })
                .catch(error => {
                    //  console.log(error);
                }
                   
                )


            setLoading(false);



        })
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = {
        user,
        createUser,
        profileUpdate,
        loginUser,
        googleSignIn,
        forgetPassword,
        logoutUser,

        loading
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;