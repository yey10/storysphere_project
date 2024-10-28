import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './bootstrap.js';
import { AuthProvider } from './AuthContext.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Histories from './pages/Histories.jsx';
import Authors from './pages/Authors.jsx';
import Categories from './pages/Categories.jsx';
import Profile from './pages/Profile.jsx';
import Help from './pages/help.jsx';
import Settings from './pages/Settings.jsx';
import Login from './pages/Login.jsx';
import  Register from './pages/Register.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="histories" element={ <ProtectedRoute><Histories /></ProtectedRoute>} />
            <Route path="authors" element={ <ProtectedRoute><Authors /></ProtectedRoute> } />
            <Route path="categories" element={<Categories />} />
            <Route path="profile" element={  <ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="help" element={<Help />} />
            <Route path="settings" element={ <ProtectedRoute><Settings /></ProtectedRoute> } />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
