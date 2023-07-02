import React, {useEffect, useState} from "react";
import axios from "axios";
import './Authorization.css'
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Login from "./login";
import {registerError, registerFillError, registerSuccess} from "../../animations/animations";


const Auth: React.FC = () => {
    const [userName, setUserName] = useState<string>()
    const [userEmail, setUserEmail] = useState<string>()
    const [userPassword, setUserPassword] = useState<string>()
    const [responseData, setResponseData] = useState<string>()
    const sendData = () => {
        if (userName && userEmail && userPassword) {
            let response = axios(
                {
                    method: 'post',
                    url: 'http://45.87.88.149:5000/api/users/register',
                    data: {
                        username: userName,
                        email: userEmail,
                        password: userPassword
                    }
                });
            response
                .then(response => {
                    setResponseData(response.data)
                    if(response.data.success){
                        registerSuccess()
                    }
                    else {
                        registerError()
                    }
                })
        }
        else {
            registerFillError()
        }
    }

    return (
        <>
            <Navigation/>
            <div className="auth_wrapper">
                <div className="login">
                    <Login/>
                </div>
                <div className="register_wrapper">
                    <h3>Register</h3>
                    <input type="text" placeholder="Artur" onChange={e => setUserName(e.target.value)}/>
                    <input type="email" placeholder="arturneurov05@gmail.com" onChange={e => setUserEmail(e.target.value)}/>
                    <input type="password" placeholder="password..." onChange={e => setUserPassword(e.target.value)}/>
                    <Link to="/">
                        <button className="send" onClick={sendData}>Register</button>
                    </Link>
                </div>
            </div>

        </>

    )
}

export default Auth