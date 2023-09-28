import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Battle from "./components/combat/Battle";

const App = () => {
    const [user, setUser] = useState({});
    const [userToken, setUserToken] = useState(window.localStorage.getItem('token'));
    const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('token'));

    return (
        <>  
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserToken={setUserToken}/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserToken={setUserToken}/>}></Route>
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