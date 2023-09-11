import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Battle from "./components/Battle";

const App = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Menu />}></Route>
                <Route path='/battle' element={<Battle />}></Route>
            </Routes>
        </>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(
    <HashRouter>
        <App />
    </HashRouter>

)