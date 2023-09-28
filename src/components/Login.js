import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";


const Login = (props) => {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onChange = (event) => {
        if (event.target.name === 'loginUsername') {
            setLoginUsername(event.target.value);
        } else if (event.target.name === 'loginPassword') {
            setLoginPassword(event.target.value);
        }
    }

    const accountLogin = async (event) => {
        event.preventDefault();
        let username = loginUsername;
        let password = loginPassword;

        try {
            const response = await axios.post('/api/users/login', {
                username,
                password
            })

            if (!response.data.success) {
                console.log(response.data);
                return setErrorMessage(response.data.message);
            } else {
                console.log(response.data);
                props.setUserToken(response.data.token);
                window.localStorage.setItem('token', `${response.data.token}`);
                return props.setIsLoggedIn(true);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div id="login-container">
                <div id="login-window">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Username</label>
                            <input
                                type="username"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Username"
                                value={loginUsername}
                                name="loginUsername"
                                onChange={onChange}></input>
                        </div>
                        <div className="form-group" id='login-password-field'>
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={loginPassword}
                                name="loginPassword"
                                onChange={onChange}></input>
                        </div>

                        <div id="errorMessage">
                            {props.isLoggedIn ? <Navigate to='/' /> : <div className='text-danger'>{errorMessage}</div>}
                        </div>

                        <button
                            type="submit"
                            id="login-submit"
                            className="btn btn-primary"
                            onClick={accountLogin}>
                            Login
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login;