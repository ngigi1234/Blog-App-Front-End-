import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import Home from './component/Home';
import DevelopersPage from './component/DevelopersPage';
import BlogsPage from './component/Home';


function App() {
  return (
    
    
    <BrowserRouter>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HomePage />
        
        <Routes>
        <Route exact path="/" element={<Home />} />  
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/developer" element={<DevelopersPage />} />
       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;












