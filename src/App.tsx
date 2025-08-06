import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeaderUpper from './components/HeaderUpper';
import Home from './pages/Home';
import About from './pages/About/About';
import Media from './pages/Media/Media';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Volunteers from './pages/Volunteers/Volunteers';
import Donate from './pages/Donate/Donate';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import HomePage from './pages/Admin/HomePage';
import UsersPage from './pages/Admin/UsersPage';
import MediaPage from './pages/Admin/MediaPage';
import ProgramsPage from './pages/Admin/ProgramsPage';
import GalleryPage from './pages/Admin/GalleryPage';
import ContactPage from './pages/Admin/ContactPage';
import ProgramDetail from './pages/Programs/ProgramDetail';

import { 
  navigationItems,
  contactInfo,
  programs
} from './data/mockData';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/home" element={<HomePage />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/media" element={<MediaPage />} />
          <Route path="/admin/programs" element={<ProgramsPage />} />
          <Route path="/admin/gallery" element={<GalleryPage />} />
          <Route path="/admin/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <>
                <HeaderUpper 
                  logo="https://unweanedchildcarefoundation.org/wp-content/uploads/2022/07/uccf-logo.png"
                  email={contactInfo.email}
                  phone={contactInfo.phone}
                />
                <Navigation 
                  logo="https://unweanedchildcarefoundation.org/wp-content/uploads/2022/07/uccf-logo.png" 
                  items={navigationItems} 
                />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/media" element={<Media />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/volunteers" element={<Volunteers />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route 
                    path="/programs/:id" 
                    element={<ProgramDetail programs={programs} />} 
                  />
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;