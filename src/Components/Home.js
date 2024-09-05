import React from 'react';
import './Css/Home.css';
import BackgroundImage from '../Assets/hero_bg.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1 className="hero-title">RIT EU</h1>
      </div>
      <div className="content">
        <section className="about-section">
          <h2>WHAT IS EU?</h2>
          <p>
            RIT EU is a Christian group on campus dedicated to helping college students grow in their faith and become leaders for Jesus 
            Christ. We do this through Bible study groups, prayer meetings, and programs that focus on sharing the message of Christ, 
            helping students grow spiritually, and developing leadership skills. Our goal is to create a supportive community on campus 
            where students can follow Jesus and make a positive impact in the world.
          </p>
          <div className="mission-vision">
            <div className="mission">
              <h3>Mission</h3>
              <p>
                RIT EU reaches out to college students at RIT to share the message of Jesus Christ. We help them grow in their faith and 
                become strong disciples. Our goal is to support them in serving the Church and making a positive impact on society. 
                Through community and guidance, we aim to inspire students to live out their faith actively.
              </p>
            </div>
            <div className="vision">
              <h3>Vision</h3>
              <p>
                At RIT EU, our mission is to transform college students into devoted disciples of the Lord Jesus Christ. We aim to 
                empower them to make a meaningful impact on campus and beyond. By fostering their faith and leadership, we inspire them 
                to serve both the Church and society. Our goal is to see students actively living out their faith and influencing the 
                world around them.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
