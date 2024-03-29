import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Login.css";
import google from "../../logos/google.png"
import * as firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./firebase.config"
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [errorMessage, setErrorMessage] = useState(null)
    firebase.initializeApp(firebaseConfig)
    const loginHandle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const loginSuccess = { ...loginUser }
                loginSuccess.name = result.user.displayName
                loginSuccess.email = result.user.email
                setLoginUser(loginSuccess)
                storeAuthToken()
                setErrorMessage(null)
            })
            .catch((error) => {
                console.log(error.message);
                setErrorMessage(error.message)
            });
    }

    // const createUserHandle=()=>{
    //     const auth = getAuth();
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             // ...
    //         })
    //         .catch((error) => {
    //             console.log(error.message)
    //         });
    // }

    const storeAuthToken = () => {
        getAuth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem("token", idToken)
                history.replace(from)
                console.log(idToken)

            })
            .catch(function (error) {
                console.log(error.message)

            });
    }

    return (
        <div className="container">
            <Navbar></Navbar>
            <div className="popUp">
                <h2 className="text-center">Login</h2>
                <button onClick={loginHandle} className="btn login"><img className="google" src={google} alt="" /> Continue with google</button>
                {/* <form action="">
                    <input type="email" name="email" pl/>
                </form> */}
                <p className="text-center mt-3">Don't have an account? <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank" rel="noreferrer">create an account</a></p>

                {
                    errorMessage && <p>{errorMessage}</p>
                }
            </div>
        </div>
    );
};

export default Login;