import React, { useState } from 'react';
import './Talent.css'; 
import ParticleBackground from './components/ParticlesBackground.js';
import axios from 'axios';

const Talent: React.FC = () => {
  // Define state for the form
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '', // New state for Industry
    message: '',
    lookingFor: { // State for checkboxes
      tempToHire: false,
      termedContract: false,
      fullTimeStaffing: false,
    },
  });

  // State for submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle change events for form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    // Update state based on input type
    if (type === 'checkbox') {
      setForm(prevForm => ({
        ...prevForm,
        lookingFor: {
          ...prevForm.lookingFor,
          [name]: e.target.checked,
        },
      }));
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      // Send the form data to the backend
      const response = await axios.post('http://localhost:5000/your-backend-endpoint', form);
      
      if (response.status === 200) {
        setIsSubmitted(true); // Show success modal if successful
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Function to close the success modal
  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="talent-page container-fluid">
      <ParticleBackground />


      <div className="row">
        {/* Left Image and Quote Section */}
        <div className="col-md-6 text-center">
          <img src="/FINDTALENT.jpg" alt="Talent" className="img-fluid" />
          <p className="image-quote mt-3">"True talent goes beyond promises—it's proven through results. We'll connect you with candidates who consistently deliver and drive impact."
          </p>
        </div>

        {/* Form section */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="bg-light p-4 border rounded">
            {/* First Name Field */}
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name Field */}
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Company Field */}
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
              />
            </div>

            {/* Industry Field */}
            <div className="form-group">
              <label htmlFor="industry">Industry:</label>
              <input
                type="text"
                className="form-control"
                id="industry"
                name="industry"
                value={form.industry}
                onChange={handleChange}
                required
              />
            </div>

            {/* Checkbox Section for "I'm looking for" */}
            <div className="form-group">
              <label>I'm looking for:</label>
              <div>
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="tempToHire"
                    checked={form.lookingFor.tempToHire}
                    onChange={handleChange}
                  />
                  Temp-to-hire
                </label>
              </div>
              <div>
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="termedContract"
                    checked={form.lookingFor.termedContract}
                    onChange={handleChange}
                  />
                  Termed contract staffing
                </label>
              </div>
              <div>
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="fullTimeStaffing"
                    checked={form.lookingFor.fullTimeStaffing}
                    onChange={handleChange}
                  />
                  Full-time staffing
                </label>
              </div>
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="modal">
          <div className="modal-content">
            <h3>Success</h3>
            <p>Your application has been submitted successfully!</p>
            <button onClick={closeModal} className="btn btn-secondary">OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Talent;
