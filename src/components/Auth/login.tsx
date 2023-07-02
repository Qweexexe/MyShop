import React, {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {loginError, LoginMailError, loginSuccess} from "../../animations/animations";


const Login: React.FC = () => {
    const [userEmail, setUserEmail] = useState<string>()
    const [userPassword, setUserPassword] = useState<string>()
    const [responseData, setResponseData] = useState<string>()


    const sendLogin = () => {
        if (userEmail && userPassword) {
            let response = axios(
                {
                    method: 'post',
                    url: 'http://45.87.88.149:5000/api/users/login',
                    data: {
                        email: userEmail,
                        password: userPassword
                    }
                });
            response
                .then(response => {
                    setResponseData(response.data)
                    if(response.data.success){
                        loginSuccess()
                    }
                    else{
                        loginError()
                    }
                })
        } else {
            LoginMailError()
        }

    }

    return (
        <div className="login_wrapper">
            <h3>Login</h3>
            <input type="email" placeholder="JohnSeena@gmail.com" onChange={e => setUserEmail(e.target.value)}/>
            <input type="password" placeholder="password..." onChange={e => setUserPassword(e.target.value)}/>
            <Link to="/">
                <button className="login_button" onClick={sendLogin}>Login</button>
            </Link>
        </div>
    )
}

export default Login