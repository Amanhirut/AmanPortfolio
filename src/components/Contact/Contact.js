import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com'; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);  // For success or error message
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Disable the button while submitting
    setIsSubmitting(true);

      // Define email parameters
  const emailParams = {
    fullName: formData.fullName,
    email: formData.email,
    mobileNumber: formData.mobileNumber,
    subject: formData.subject,
    message: formData.message,
  };

    emailjs
      .send('service_58x2tqi', 'template_g8heepi', emailParams, 'vEHyWDiqkzXu1d6LF')
      .then(() => {
        setFormStatus('Message sent successfully!');
        setIsSubmitting(false);
        setFormData({
          fullName: '',
          email: '',
          mobileNumber: '',
          subject: '',
          message: ''
        });
      })
      .catch(() => {
        setFormStatus('Error sending message. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            placeholder="Email Subject"
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          required
        />
        <input 
          type="submit" 
          value={isSubmitting ? "Sending..." : "Send Message"} 
          className="btn" 
          disabled={isSubmitting} 
        />
      </form>
      
      {formStatus && (
        <p className={`status-message ${formStatus.includes('success') ? 'success' : 'error'}`}>
          {formStatus}
        </p>
      )}
    </section>
  );
}

export default Contact;
