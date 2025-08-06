import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeaderUpper from './components/HeaderUpper';
import Home from './pages/Home';
import About from './pages/About/About';
import Media from './pages/Media/Media';

import { 
  navigationItems,
  contactInfo
} from './data/mockData';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <HeaderUpper 
          logo="https://images.pexels.com/photos/7715276/pexels-photo-7715276.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          email={contactInfo.email}
          phone={contactInfo.phone}
        />
        <Navigation 
          logo="https://images.pexels.com/photos/7715276/pexels-photo-7715276.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
          items={navigationItems} 
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;