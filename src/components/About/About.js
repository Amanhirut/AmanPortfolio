import React from 'react'
import './about.css'
import aboutImg from "../../components/image/about (2).jpg";

function About() {
    return (
      <section className="about" id="about">
        <div className="about-img">
          <img src={aboutImg} alt="About Me" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Frontend Developer!</h3>
          <p>
          I’m a passionate <strong className='problem'>problem-solver</strong> who thrives on turning ideas into reality through <strong className='problem'>clean code</strong> & <strong className='problem'>responsible websites</strong>. I love JavaScript, open-source, and creating intuitive UIs.<br /><br />  
          When I’m not coding, you’ll find me exploring new tech, gaming, or enjoying coffee & music.

          </p>
          <a href="#read-more" className="btn">
            Read More
          </a>
        </div>
      </section>
    );
  }
  
  export default About;
  