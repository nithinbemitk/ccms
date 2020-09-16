import React from 'react';
import logo from '../../images/LoginBackground.png'
import icon from '../../images/MicrosoftIcon.png'
import { useDispatch } from 'react-redux'
 import { loggedIn } from '../../actions'


function Login() {

    const dispatch = useDispatch();

    const LoginClicked = () => {
        console.log("Login Clicked");
        dispatch(loggedIn())

    }


    return (
        <div className="loginCss">
            <div className="loginLeftCss">
                <h3>Sign In</h3>
                <button ><img src={icon} onClick={LoginClicked}></img></button>
            </div>
            <div className="loginRightCss">
                <img src={logo}></img>
            </div>
        </div>
    );
}

export default Login;
