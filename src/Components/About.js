import React from 'react';
import './Css/About.css';

function About() {
  return (
    <div className='about-container'>
      <div className='card'>
        <h2>About Us</h2>
        <p>
          RIT EU is dedicated to supporting post-matric students at RIT through Christian fellowship and spiritual growth. Our goal is to empower students to become impactful leaders who actively contribute to their community and faith.
        </p>
      </div>
      <div className='card'>
        <h2>How to Join</h2>
        <p>
          Interested in joining RIT EU? We welcome all students eager to grow in their faith and make a difference. Attend our weekly meetings, engage in our activities, and connect with us to get started.
        </p>
      </div>
      <div className='card'>
        <h2>Contact Details</h2>
        <p>
          <strong>Email:</strong> contact@riteu.org <br />
          <strong>Phone:</strong> +91-123-456-7890 <br />
          <strong>Address:</strong> RIT Campus, XYZ Road, City, State, 123456
        </p>
      </div>
    </div>
  );
}

export default About;
