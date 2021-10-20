import React, { useContext} from 'react';
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

    firebase.initializeApp(firebaseConfig)
    const loginHandle=()=>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const loginSuccess= {...loginUser}
                loginSuccess.name = result.user.displayName
                loginSuccess.email= result.user.email
                setLoginUser(loginSuccess)
                storeAuthToken()
            })
            .catch((error) => {
                console.log(error.message);
            });
        }

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
                <button onClick={loginHandle} className="btn login"><img className="google" src={google} alt=""/> Continue with google</button>
                <p className="text-center mt-3">Don't have an account? <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank">create an account</a></p>
            </div>
        </div>
    );
};

export default Login;