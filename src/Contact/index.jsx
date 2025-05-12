import React, { useState } from 'react';
import './index.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Details Section */}
        <div className="contact-details">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-info">
            <strong>Address:</strong> 123 Street, City, Country
          </p>
          <p className="contact-info">
            <strong>Email:</strong> contact@example.com
          </p>
          <p className="contact-info">
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-field">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="form-input"
            />
          </div>
          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-input"
            />
          </div>
          <div className="form-field">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;