import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsAwardFill } from "react-icons/bs";
import CertImageEight from "../../images/image8.png";
import CertImageNine from "../../images/image9.png";
import CertImageTen from "../../images/image10.png";
import CertImageEleven from "../../images/image11.png";
import CertImageTwelve from "../../images/image12.png";
import CertImageThirteen from "../../images/image13.png";
import CertImageFourteen from "../../images/image14.png";
import "./styles.scss";


const certificatesData = [
  {
    id: 1,
    name: "SLIIT Faculty of Computing",
    organization: "AI/ML Engineer - Stage 1",
    date: "December 2024",
    image: CertImageEight,
    link: "https://code.sliit.org/certificates/qrz58fiigb",
  },
  {
    id: 2,
    name: "SLIIT Faculty of Computing",
    organization: "AI/ML Engineer - Stage 2",
    date: "December 2024",
    image: CertImageNine,
    link: "https://code.sliit.org/certificates/hnqolfbadx",
  },
  {
    id: 3,
    name: "University of Moratuwa",
    organization: "Python For Beginners",
    date: "December 2024",
    image: CertImageTen,
    link: "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1",
  },
  {
    id: 4,
    name: "Alison",
    organization: "Diploma In Software Testing",
    date: "December 2024",
    image: CertImageEleven,
    link: "https://www.linkedin.com/in/nishan-nilanga/details/certifications/#:~:text=Learning(AI).jpg-,Diploma%20In%20Software%20Testing,-Diploma%20In%20Software",
  },
  {
    id: 5,
    name: "Simplilearn",
    organization: "Introduction to Front End Development",
    date: "December 2024",
    image: CertImageTwelve,
    link: "https://simpli-web.app.link/e/10eOYbxbKPb",
  },
  {
    id: 6,
    name: "Great Learning Support",
    organization: "Android Application Development",
    date: "December 2024",
    image: CertImageFourteen,
    link: "https://www.mygreatlearning.com/certificate/HLLRZXAA",
  },
  {
    id: 7,
    name: "LinkedIn for Learning - LMSAFP account",
    organization: "Career Skill in Software Development",
    date: "December 2024",
    image: CertImageThirteen,
  },
];

const Certificate = () => {
  const [filteredvalue, setFilteredValue] = useState(1);  
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }
  

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? certificatesData
      : certificatesData.filter((item) => item.id === filteredvalue);


  return (
    <section id="certificate" className="certificate">
      <PageHeaderContent
        headerText="Certificates"
        icon={<BsAwardFill size={40} />}
      />
      <div className="certificate__content">
        <ul div className="certificate__content__cards">
          {certificatesData.map((item) => (
            <li
            className={item.filterId === filteredvalue ? "active" : ""}
            onClick={() => handleFilter(item.filterId)}
            key={item.filterId}
          >
            {item.label}
          </li>
          ))}
        </ul>
            <div
              className="certificate__content__cards__item">
              {filteredItems.map((item, index) => (
                <div
                  className="portfolio__content__cards__item"
                  key={`cardItem${item.name.trim()}`}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(null)}
                >
              <div className="certificate__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.organization}</p>
                    <p>{item.date}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>View Certificate</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
