/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/register";

export default function Routing() {
    const [ifAuthenticated, setIfAuthenticated] = useState(false);
    return (
        <Router>
            <Routes>
                <Route path="/" element={ifAuthenticated ? <Dashboard /> : <Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}