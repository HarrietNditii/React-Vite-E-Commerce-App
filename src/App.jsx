import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // assuming Home component is in the pages folder
import SkinCareTips from './pages/SkinCareTips'; // Create this page
import Serums from './pages/Serums'; // Create this page
import Moisturizers from './pages/Moisturizers'; // Create this page
import Toners from './pages/Toners'; // Create this page
import Sunscreen from './pages/Sunscreen'; // Create this page
import FaceOils from './pages/FaceOils';

import Footer from './components/Footer'; // Your Footer component

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skin-care-tips" element={<SkinCareTips />} />
                <Route path="/serums" element={<Serums />} />
                <Route path="/moisturizers" element={<Moisturizers />} />
                <Route path="/toners" element={<Toners />} />
                <Route path="/sunscreen" element={<Sunscreen />} />
                <Route path="/face-oils" element={<FaceOils />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
