import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
        requirements: '',
        employmentType: 'Full-time',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/jobs', formData); 
            console.log(response.data);
            setFormData({
                title: '',
                company: '',
                location: '',
                description: '',
                requirements: '',
                employmentType: 'Full-time',
            });
        } catch (error) {
            console.error('Error submitting job form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required />
            <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
            <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} required />
            <textarea name="requirements" placeholder="Requirements" value={formData.requirements} onChange={handleChange} required />
            <select name="employmentType" value={formData.employmentType} onChange={handleChange}>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
            </select>
            <button type="submit">Submit Job</button>
        </form>
    );
};

export default JobForm;
