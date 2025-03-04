  import React, { useState } from 'react';
  import ParticleBackground from './components/ParticlesBackground.js';
  import './Job.css';

  const Job: React.FC = () => {
    const [form, setForm] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      pdf: null,
    });
    const [isSubmitted, setIsSubmitted] = useState(false); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, type, files } = e.target;

      if (type === 'file') {
        setForm({
          ...form,
          [name]: files ? files[0] : null,
        });
      } else {
        setForm({
          ...form,
          [name]: value,
        });
      }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Form Data:', form);

      setIsSubmitted(true); // Show the modal
      // Optionally, reset the form here if needed
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        pdf: null,
      });
    };

    // Function to close the success modal
    const closeModal = () => {
      setIsSubmitted(false);
    };

    return (
      <div className="job-page container-fluid">
        <ParticleBackground />

        <div className="row">
          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img src="/FINDJOB.jpg" alt="Find Jobs" className="img-fluid" />
            <p className="image-quote mt-3">"Your skills deserve the ideal opportunity to thrive. Let us help you find a job that allows you to showcase your potential and reach new heights."
            </p>
          </div>

          {/* Form Container */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="bg-light p-4 border rounded">
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

              <div className="form-group">
                <label htmlFor="company">Company (Put N/A if currently unemployed):</label>
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

              <div className="form-group">
                <label htmlFor="pdf">Upload Resume:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="pdf"
                  name="pdf"
                  onChange={handleChange}
                  accept=".pdf"
                  required
                />
              </div>

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

  export default Job;
