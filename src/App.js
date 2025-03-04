import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; 
import Talent from './Talent';
import Job from './Job';
import TalentForm from './components/TalentForm'; 
import JobForm from './components/JobForm';
import Footer from './components/Footer'; 
import PrivacyPolicy from './PrivacyPolicy';
import ToS from './ToS';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {}
        <Navbar />

        {/* Define routes */}
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="homepage">
                {/* Background video */}
                <video autoPlay muted loop className="background-video">
                  <source src="cityview.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Main body content */}
                <div className="centered-text">
                  <h1>At Amazantian, we aim to make the hiring process easier for companies and candidates without compromising quality.</h1>
                </div>
              </div>
            } 
          />
          <Route path="/find-talent" element={<Talent />} />
          <Route path="/find-jobs" element={<Job />} />
          <Route path="/submit-talent" element={<TalentForm />} /> {/* Add route for TalentForm */}
          <Route path="/submit-jobs" element={<JobForm />} /> {/* Add route for JobForm */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add route for JobForm */}
          <Route path="/terms-of-service" element={<ToS />} /> {/* Add route for JobForm */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
