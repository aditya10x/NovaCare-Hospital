import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../assets/contact.css';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="container">
          <h1>Contact Us</h1>

          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>NovaCare Multispeciality Hospital</h2>
              <p><strong>Address:</strong> 123 Wellness Street, Gandhinagar, Gujarat</p>
              <p><strong>Phone:</strong> +91 8469304029</p>
              <p><strong>Email:</strong> contact@novacarehospital.com</p>
              <p><strong>Hours:</strong> Mon - Sat: 9am - 7pm</p>
            </div>

            <div className="contact-form">
              <form>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />

                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Type your message..." required></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
