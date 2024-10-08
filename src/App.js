import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
import ModernBathroom from './components/ModernBathroom';
import VirtualTour from './components/VirtualTour';
import Branches from './components/Branches';
import Enimities from './components/Enimities';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/modern-bathroom" element={<ModernBathroom/>}/>
        <Route path="virtualtour" element={<VirtualTour/>}/>
        <Route path="locations" element={<Branches/>}/>
        <Route path="enimities" element={<Enimities/>}/>
        

        
      </Routes>
    </Router>
  );
}

export default App;
