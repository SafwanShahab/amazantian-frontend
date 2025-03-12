import React, { useState } from "react";
import "./Misc.css";
import ParticlesBackground from "./components/ParticlesBackground"; // Adjust path if needed 

const faqs = [
  { 
    question: "1. What is Amazantian Staffing?", 
    answer: "Amazantian Staffing is a professional staffing agency that connects top talent with leading companies. We specialize in providing skilled workers for a wide range of industries including IT, healthcare, marketing, finance, and more. accounting, HR, logistics, construction, legal, sales." 
  },
  { 
    question: "2. How do I apply for a job with Amazantian Staffing?", 
    answer: "If you are looking for a job, visit our Find Jobs page and submit your name, email, phone number, resume, and fill out a message letting us know what you are looking for." 
  },
  { 
    question: "3. How does Amazantian Staffing help employers?", 
    answer: "We help employers find the best talent by offering customized recruitment services, including temporary, permanent, and contract staffing. We take care of everything from sourcing to screening, ensuring you get the right candidates quickly." 
  },
  { 
    question: "4. What types of staffing services do you offer?", 
    answer: (
      <ul>
        <ol>Temporary Staffing: For short-term, project-based roles.</ol>
        <ol>Permanent Staffing: Full-time placements for long-term roles.</ol>
        <ol>Contract Staffing: For fixed-term contracts or project-based needs.</ol>
      </ul>
    )
  },
  { 
    question: "5. How do you ensure the quality of candidates?", 
    answer: "We conduct thorough screening, including skills assessments, background checks, and interviews. We also match candidates to roles based on their experience, qualifications, and cultural fit, ensuring a higher success rate for both employers and employees."
  },
  { 
    question: "6. What is the cost that an employer can expect to pay for Amazantian’s staffing services?", 
    answer: "The staffing services fee varies depending on the type of placement (temporary, permanent, or contract). For more details, please contact us for a custom quote."
  }
];

function Misc() {
  const [openIndex, setOpenIndex] = useState(null);
  

  return (
    <div className="misc-container">
      <ParticlesBackground />
      <div className="contact-section">
        <h2 className="contact-header">Need Further Assistance?</h2>
        <p>If you didn’t find the answer you were looking for, feel free to reach out to us. We’re here to help!</p>

        <h2 className="contact-header">Contact Us</h2>
        <p>Email: <a href="mailto:amazantian@gmail.com">amazantian@gmail.com</a></p>
        <p>Phone: <a href="tel:+16268854899">626-885-4899</a></p>
        <p>Business Hours: Monday - Friday, 9:00 AM - 9:00 PM (PST)</p>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-header">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => setOpenIndex(openIndex !== index ? index : null)}>
                {faq.question}
              </button>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
              
            </div>
          ))}
          <div className="spacer"></div>

        </div>
      </div>
    </div>
  );
}

export default Misc;