import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ModelList from './components/ModelList';
import ARViewer from './components/ARViewer';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<ModelList />} />
          <Route path="/ar/:modelId" element={<ARViewer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;