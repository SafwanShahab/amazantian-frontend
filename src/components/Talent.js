import React, { useState } from "react";
import "./Talent.css";
import ParticleBackground from "./ParticlesBackground.js";
import { db } from "../firebase/firebase.js"; 
import { collection, addDoc } from "firebase/firestore";  // Add this import for Firestore functions
import ScrollToTop from "./ScrollToTop.js";

const Talent = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
    lookingFor: {
      tempToHire: false,
      termedContract: false,
      fullTimeStaffing: false,
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prevForm) => ({
        ...prevForm,
        lookingFor: {
          ...prevForm.lookingFor,
          [name]: checked,
        },
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "talentSubmissions"), form);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="talent-page container-fluid">
      <ScrollToTop />
      <ParticleBackground />
      <div className="row">
        <div className="col-md-6 text-center">
          <img src="/FINDTALENT.jpg" alt="Talent" className="img-fluid" />
          <p className="image-quote mt-3">
            "True talent goes beyond promises—it's proven through results. We'll connect you with candidates who consistently deliver and drive impact."
          </p>
        </div>

        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="bg-light p-4 border rounded">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" className="form-control" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" className="form-control" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input type="text" className="form-control" id="company" name="company" value={form.company} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="industry">Industry:</label>
              <input type="text" className="form-control" id="industry" name="industry" value={form.industry} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>I'm looking for:</label>
              <div>
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" name="tempToHire" checked={form.lookingFor.tempToHire} onChange={handleChange} />
                  Temp-to-hire
                </label>
              </div>
              <div>
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" name="termedContract" checked={form.lookingFor.termedContract} onChange={handleChange} />
                  Termed contract staffing
                </label>
              </div>
              <div>
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" name="fullTimeStaffing" checked={form.lookingFor.fullTimeStaffing} onChange={handleChange} />
                  Full-time staffing
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" name="message" value={form.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      {isSubmitted && (
        <div className="modal">
          <div className="modal-content">
            <h3>Success</h3>
            <p>Your application has been submitted successfully!</p>
            <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary">OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Talent;
