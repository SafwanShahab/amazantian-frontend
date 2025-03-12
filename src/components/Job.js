import React, { useState } from 'react';
import { db, storage } from '../firebase/firebaseConfig'; // Import Firebase
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ParticleBackground from './ParticlesBackground.js';
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

  // Handle input changes
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let pdfURL = ''; // URL for the uploaded PDF

      // If a PDF is uploaded, upload it to Firebase Storage
      if (form.pdf) {
        const storageRef = ref(storage, `resumes/${form.pdf.name}`);
        await uploadBytes(storageRef, form.pdf); // Upload the file
        pdfURL = await getDownloadURL(storageRef); // Get the download URL of the uploaded file
      }

      // Save the form data to Firestore, including the file URL
      await addDoc(collection(db, 'jobApplications'), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        company: form.company,
        message: form.message,
        pdfURL: pdfURL, // Store the file URL in Firestore
        timestamp: new Date(),
      });

      setIsSubmitted(true); // Show the success modal

      // Reset form after submission
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        pdf: null,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Close the success modal
  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="job-page container-fluid">
      <ParticleBackground />

      <div className="row">
        <div className="col-md-6 text-center">
          <img src="/FINDJOB.jpg" alt="Find Jobs" className="img-fluid" />
          <p className="image-quote mt-3">"Your skills deserve the opportunity to thrive and grow in a dynamic, innovative environment."</p>
        </div>

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
              <label htmlFor="company">Company (Put N/A if unemployed):</label>
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

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      {isSubmitted && (
        <div className="modal">
          <div className="modal-content">
            <h3>Success</h3>
            <p>Your application has been submitted successfully!</p>
            <button onClick={closeModal} className="btn btn-secondary">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;
