import React from 'react';
import './home.css';  
import Amexo from "../../components/image/Amexo (1).jpg"
import { useEffect, useRef } from "react";

function Home() {

  const textRef = useRef();

  useEffect(() => {
    const currentTextRef = textRef.current; // Cache the ref value
    const phrases = ["Full Stack Developer", "Data Analyst", "Programmer"];
    let phraseIndex = 0;
    let charIndex = 0;
    let typingTimeout;

    const typePhrase = () => {
      if (phraseIndex < phrases.length) {
        if (charIndex < phrases[phraseIndex].length) {
          currentTextRef.textContent += phrases[phraseIndex][charIndex];
          charIndex++;
          typingTimeout = setTimeout(typePhrase, 100);
        } else {
          setTimeout(() => {
            currentTextRef.textContent = "";
            charIndex = 0;
            phraseIndex++;
            typePhrase();
          }, 1500);
        }
      } else {
        phraseIndex = 0;
        typePhrase();
      }
    };

    typePhrase();

    return () => {
      clearTimeout(typingTimeout);
      if (currentTextRef) {
        currentTextRef.textContent = ""; // Clear content on cleanup
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section className="home" id="home">
      <div className='container'>
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Amare Fentaw</h1>
        <h3>And I'm a <span ref={textRef}></span></h3>
        {/* <h3>And I'm a <span>Full Stack Developer</span></h3> */}
        <p>I thrive on turning ideas into functional,     beautiful apps and websites. I work with <strong className="tech">React</strong>, <strong className="tech">Node.js</strong>, and <strong className="tech">MySQL</strong>, crafting seamless user experiences. </p>
       <div className="social-media">
           <a href="https://www.facebook.com/share/1BcijqCbm4/" target="_blank" rel="noopener noreferrer">
           <i className="bx bxl-facebook-circle"></i>
           </a>
           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
           <i className="bx bxl-twitter"></i>
           </a>
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
           <i className="bx bxl-instagram"></i>
           </a>
           <a href="https://www.linkedin.com/feed/?trk=404_page" target="_blank" rel="noopener noreferrer">
           <i className="bx bxl-linkedin"></i>
            </a>
        </div>
        <a href="c:\Users\tseda\OneDrive\Desktop\Amare\profile\Cv\CV Amare.pdf" download className="btn">
        Download CV
        </a>
       </div>
      <div className="home-img">
        <img src={Amexo} alt="Amare Fentaw" />
      </div>
    </div>
    </section>
  );
}

export default Home;
