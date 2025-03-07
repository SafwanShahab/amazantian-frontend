import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; 
import Talent from './components/Talent';
import Job from './components/Job';
import TalentForm from './components/TalentForm'; 
import JobForm from './components/JobForm';
import Footer from './components/Footer'; 
import PrivacyPolicy from './PrivacyPolicy';
import ToS from './ToS';
import Misc from './Misc';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        {/* Define routes */}
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="homepage">
                {/* Background video */}
                <video autoPlay muted loop className="background-video">
                  <source src="Cityview.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Main body content */}
                <div className="centered-text">
                  <h1>At Amazantian, we aim to make the hiring process easier for companies and candidates without compromising quality.</h1>
                </div>

                {/* Fields section should only appear on the homepage */}
                <section className="fields-section">
                  <div className="fields-header">
                    <h2>Amazantian can assist you with both short and long-term staffing needs in industries including but not limited to:</h2>
                  </div>
                  <div className="fields-grid">
                    <div className="field-item">Accounting</div>
                    <div className="field-item">Administration</div>
                    <div className="field-item">Construction</div>
                    <div className="field-item">Customer Service</div>
                    <div className="field-item">Financial Services</div>
                    <div className="field-item">Healthcare</div>
                    <div className="field-item">Human Resources</div>
                    <div className="field-item">Information Technology</div>
                    <div className="field-item">Legal</div>
                    <div className="field-item">Logistics</div>
                    <div className="field-item">Marketing</div>
                    <div className="field-item">Sales</div>
                  </div>
                </section>
              </div>
            } 
          />
          
          <Route path="/find-talent" element={<Talent />} />
          <Route path="/find-jobs" element={<Job />} />
          <Route path="/submit-talent" element={<TalentForm />} />
          <Route path="/submit-jobs" element={<JobForm />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<ToS />} />
          <Route path="/miscellaneous" element={<Misc />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
