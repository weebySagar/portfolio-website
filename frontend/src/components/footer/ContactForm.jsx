"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic for form submission here
    if (validateForm()) {
      console.log("Form submitted:", formData);
      const { name, email, message } = formData;
      const body = `Hello, \n my Name is ${name} and my email is ${email}, \n ${message}`;
      const mailtoLink = `mailto:${'sagarmaurya814@gmail.com'}?subject=${encodeURIComponent(
        'Contact Form'
      )}&body=${encodeURIComponent(body)}`;
  
      // Open the default email client
      window.location.href = mailtoLink;
    }
    // For demonstration purposes, we're just logging the form data
  };
  return (
    <div className="contact-form">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              aria-describedby="message"
              rows="8"
              value={formData.message}
              onChange={handleChange}
              name="message"
            />
            {errors.message && <p className="text-danger">{errors.message}</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
