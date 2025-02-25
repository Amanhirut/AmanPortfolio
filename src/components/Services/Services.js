import React from "react";
import "./services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
          We craft responsive and high-performance websites using modern technologies like React and Node.js, ensuring seamless user experience.
          </p>
          <a href="#web-development" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="bx bxs-paint"></i>
          <h3>Video Editing</h3>
          <p>
          Professional video editing for YouTube, ads, and promos. Smooth transitions, effects, and color grading for stunning visuals.
          </p>
          <a href="#video-editing" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="bx bx-bar-chart-alt"></i>
          <h3>Data Analyst</h3>
          <p>
          Transform raw data into actionable insights using Python, SQL, and Power BI, helping businesses make informed decisions.
          </p>
          <a href="#data-analytics" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
