import {HashRouter, Route, Routes} from "react-router-dom"
import React from "react";
import Login from "../pages/Login";
import MainModule from "./Main.module.css"
import Home from "../pages/Home";
import { UserProvider } from "../context/UserContext";


export default function Main() {
    return(
        <main className={MainModule.main}>
                <UserProvider>
                    <HashRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </HashRouter>
                </UserProvider>
        </main>
    )
}