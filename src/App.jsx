import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import LoginRegister from "./Components/LoginRegister/LoginRegister.jsx";
import Posts from "./Components/PostForm.jsx";
import PostForm from "./Components/PostForm.jsx";
import PostCreation from "./Components/PostCreation.jsx";
import Footer from "./Components/Footer.jsx";

function AppContent() {
    const location = useLocation();
    return (
        <div>
            {location.pathname !== "/LoginRegister" && <NavBar />}
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/PostForm" element={<PostForm />} />
                <Route path="/LoginRegister" element={<LoginRegister />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;