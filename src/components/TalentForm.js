import React, { useState } from 'react';
import axios from 'axios';

const TalentForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        tempToHire: false,
        termedContract: false,
        fullTimeStaffing: false,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/find-talent', formData);
            console.log('Form submission successful:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
            <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Industry" />
            <label>
                <input type="checkbox" name="tempToHire" checked={formData.tempToHire} onChange={handleChange} />
                Temp-to-hire
            </label>
            <label>
                <input type="checkbox" name="termedContract" checked={formData.termedContract} onChange={handleChange} />
                Termed Contract
            </label>
            <label>
                <input type="checkbox" name="fullTimeStaffing" checked={formData.fullTimeStaffing} onChange={handleChange} />
                Full-time Staffing
            </label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TalentForm;
