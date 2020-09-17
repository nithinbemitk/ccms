import React, { useState, useEffect } from 'react';
import logo from '../../images/LoginBackground.png'
import icon from '../../images/MicrosoftIcon.png'
import { useDispatch } from 'react-redux'
import { loggedIn } from '../../actions'


function Login() {

    const [signIn, setSignIn] = useState("Log In");

    const dispatch = useDispatch();

    const LoginClicked = () => {
        console.log("Login Clicked");
        dispatch(loggedIn())

    }

    // // Similar to componentDidMount and componentDidUpdate:
   
    useEffect(
        () => {
            setSignIn("Sign In")
          
            //To clean up, Return a callback in useEffect and it will be called before unmounting
          return () => {
            setSignIn("Log Out")
          };
        },
        [] // Pass an empty array to run only callback on mount only.
      );



    return (
        <div className="loginCss">
            <div className="loginLeftCss">
                <h3>{signIn}</h3>
                <button ><img src={icon} onClick={LoginClicked}></img></button>
            </div>
            <div className="loginRightCss">
                <img src={logo}></img>
            </div>
        </div>
    );
}

export default Login;
