import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Css/Contact.css';

function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_onv6equ', 'template_mufnwpu', e.target, 'pVr0zYqkNH7mUAVF8')
      .then((result) => {
        setLoading(false);
        toast.success('Your message has been sent. Thank you!');
        e.target.reset();
      }, (error) => {
        setLoading(false);
        console.error('EmailJS error:', error.text); // Log error for debugging
        toast.error('Oops! Something went wrong. Please try again.');
      });
  };

  return (
    <>
      <h1 className='about-heading'>--Contact--</h1>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row" data-aos="fade-in">
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form id="contact-form" className="php-email-form" onSubmit={sendEmail}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" name="message" rows="4" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default Contact;
