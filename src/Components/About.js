import React from 'react';
import './Css/About.css';

function About() {
  return (
    <>
      <h1 className='about-heading'>--About--</h1>
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
            <strong>Email:</strong> riteugroup@gmail.com <br />
            <strong>Phone:</strong> +91 73564 95708 <br />
            <strong>Address:</strong> RIT Kottayam<br />
            <strong> </strong> <br />
            <strong><button className='cont-button'>Contact</button></strong><br />
          </p>
        </div>
        <div className='card'>
          <h2>Present Leaders</h2>
          <p>
            <strong>Staff:</strong> Vincent G <br />
            <strong>Mob:</strong> +91 94955 08617<br />
            <strong> </strong> <br />
            <strong>Student Lead:</strong> Aby Pious <br />
            <strong>Mob:</strong> +91 73564 95708
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
