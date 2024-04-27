import React from 'react';
import './style.css'; // Import the CSS file

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title"><u>Contact</u></h1>
      <p className="contact-content"><b>
        If you need assistance or have any questions about our student course management system, we're here to help. Please feel free to reach out to us using the contact information below:
      </b></p>
      <div className="contact-details">
        <b><u>Email:</u></b>
        <p>kluniversity@gmail.com</p>
        <b><u>Phone:</u></b>
        <p>9898765433</p>
        <p align="center">Our support team is available during regular business hours to assist you.</p>
        <p align="center">Thank you for choosing our course management system. We look forward to helping you succeed in your academic journey.</p>
      </div>
    </div>
  );
}
