import React from "react";
import "./portfolio.css";
import img1 from "../../components/image/6.jpg";
import img2 from "../../components/image/5.jpg";
import img3 from "../../components/image/1 (3).jpg";
import img4 from "../../components/image/7.jpg";

const projects = [
  { 
    id: 1, 
    image: img1, 
    title: "Netflix Clone", 
    description: "A clone of the Netflix homepage built using HTML, CSS, and JavaScript.",
    link: "https://amanhirut.github.io/netflix-page/" // Add the Netflix project link here
  },
  { 
    id: 2, 
    image: img2, 
    title: "Project2", 
    description: "Error aspernatur labore, consequuntur laudantium exercitationem omnis commodi molestias.",
    link: "#" // Add a placeholder link or a real link if available
  },
  { 
    id: 3, 
    image: img3, 
    title: "Project3", 
    description: "Error aspernatur labore, consequuntur laudantium exercitationem omnis commodi molestias.",
    link: "#" // Add a placeholder link or a real link if available
  },
  { 
    id: 4, 
    image: img4, 
    title: "Project4", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#" // Add a placeholder link or a real link if available
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>

      <div className="portfolio-container">
        {projects.map((project) => (
          <div className="portfolio-box" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
