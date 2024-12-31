import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Importing icons
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text--wrapper">
        <h1>
          Hello, I'm Nishan Nilanga
          <br />
          Web and Software Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>
            Hire Me
          </button>
          <a href="/A B Nishan Nilanga Professional CV.pdf" download className="download-resume-btn">
            <button>Download Resume</button>
          </a>
        </div>
        <div className="home__social-media">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nishan-nilanga/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={30} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/NishanNilanga" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={30} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/nishan_nilanga0/?next=%2F#" // Replace with your Instagram profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
