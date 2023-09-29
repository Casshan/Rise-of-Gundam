import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Start from "./components/Start";
import Menu from "./components/Menu";
import Battle from "./components/combat/Battle";

const App = () => {
    const [user, setUser] = useState({});
    const [userToken, setUserToken] = useState(window.localStorage.getItem('token'));
    const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('token'));

    const getUserData = async () => {
        if (userToken) {
            try {
                const response = await axios.get(`/api/users/me`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`
                    }
                });
                setUser(response.data.user);
            } catch (error) {
                console.error(error);
            };
        } else {
            setUser({});
        };
    };

    useEffect(() => {
        getUserData();
    }, [userToken])

    return (
        <>  
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserToken={setUserToken}/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserToken={setUserToken}/>}></Route>
                <Route path='/start' element={<Start userToken={userToken} user={user}/>}></Route>
                <Route path='/menu' element={<Menu />}></Route>
                <Route path='/battle' element={<Battle />}></Route>
            </Routes>
            <Footer />
        </>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(
    <HashRouter>
        <App />
    </HashRouter>

)