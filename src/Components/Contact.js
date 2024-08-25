import React from 'react'
import './Css/Contact.css'

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    // Send the form data using EmailJS
    emailjs.sendForm('service_blfm97n', 'template_9j91iwl', event.target, 'OIrhWrHv0oSqtqiy6')
      .then((result) => {
        console.log("Success:", result.text);
        toast.success("MESSAGE SENT SUCCESSFULLY !!");
        
        // Redirect to home page after 2 seconds
        setTimeout(() => {
          navigate('/mainpage', { replace: true }); // Redirect to home page
        }, 2000);
      }, (error) => {
        console.log("Error:", error.text);
        toast.error("There was an error submitting the form. Please try again.");
      });
  };

  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
          </div>
          
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT US</span>
              </div>
              <div>‎</div>
              <div className="app-title">
              <img src={contactimg} alt="dementor.help@gmail.com" />
              </div>
              <div>‎</div>
              <div className="app-contact">CONTACT INFO : dementor.help@gmail.com</div>
            </div>
            <form onSubmit={handleSubmit}>
  <div className="screen-body-item">
    <div className="app-form">
      <div className="app-form-group form-control">
        <input
          className="app-form-control"
          id="name"
          name="name"
          type="text"
          required
        />
        <label>
          <span style={{ transitionDelay: '0ms' }}>N</span>
          <span style={{ transitionDelay: '50ms' }}>A</span>
          <span style={{ transitionDelay: '100ms' }}>M</span>
          <span style={{ transitionDelay: '150ms' }}>E</span>
        </label>
      </div>
      <div className="app-form-group form-control">
        <input
          className="app-form-control"
          id="email"
          name="email"
          type="text"
          required
        />
        <label>
          <span style={{ transitionDelay: '0ms' }}>E</span>
          <span style={{ transitionDelay: '50ms' }}>M</span>
          <span style={{ transitionDelay: '100ms' }}>A</span>
          <span style={{ transitionDelay: '150ms' }}>I</span>
          <span style={{ transitionDelay: '200ms' }}>L</span>
        </label>
      </div>
      <div className="app-form-group form-control">
        <input
          className="app-form-control"
          id="subject"
          name="subject"
          type="text"
          required
        />
        <label>
          <span style={{ transitionDelay: '0ms' }}>S</span>
          <span style={{ transitionDelay: '50ms' }}>U</span>
          <span style={{ transitionDelay: '100ms' }}>B</span>
          <span style={{ transitionDelay: '150ms' }}>J</span>
          <span style={{ transitionDelay: '200ms' }}>E</span>
          <span style={{ transitionDelay: '250ms' }}>C</span>
          <span style={{ transitionDelay: '300ms' }}>T</span>
        </label>
      </div>
      <div className="app-form-group form-control message">
        <input
          className="app-form-control"
          type="text"
          name="message"
          required
        />
        <label>
          <span style={{ transitionDelay: '0ms' }}>M</span>
          <span style={{ transitionDelay: '50ms' }}>E</span>
          <span style={{ transitionDelay: '100ms' }}>S</span>
          <span style={{ transitionDelay: '150ms' }}>S</span>
          <span style={{ transitionDelay: '200ms' }}>A</span>
          <span style={{ transitionDelay: '250ms' }}>G</span>
          <span style={{ transitionDelay: '300ms' }}>E</span>
        </label>
      </div>
      <div className="app-form-group buttons-row">
        <button className="app-form-button1" type="reset">
          CANCEL
        </button>
        <button className="app-form-button2" type="submit">
          SEND
        </button>
      </div>
    </div>
  </div>
</form>

          </div>
          <div className="screen-footer">
          
          </div>
        </div>
        
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
