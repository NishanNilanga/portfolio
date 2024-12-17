import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Rubber Carpet Manufacturing",
    image: ImageOne,
    link: "https://www.linkedin.com/in/nishan-nilanga/details/projects/#:~:text=Projects-,Rubber%20Carpet%20Manufacturing%20System%20Web%20Application,-Rubber%20Carpet%20Manufacturing",
  },
  {
    id: 3,
    name: "Contact Book",
    link: "https://www.linkedin.com/in/nishan-nilanga/details/projects/#:~:text=all%2012%20media-,Contacts%20%2D%20Mobile%20Application,-Contacts%20%2D%20Mobile%20Application",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "ShoeVerse Design App",
    image: ImageThree,
    link: "https://www.linkedin.com/in/nishan-nilanga/details/projects/#:~:text=all%204%20media-,ShoeVerse%20%2D%20Online%20Shoe%20buying%20selling%20Application,-ShoeVerse%20%2D%20Online%20Shoe",
  },
  {
    id: 3,
    name: "Mobile Game App",
    image: ImageFour,
    link: "https://www.linkedin.com/in/nishan-nilanga/details/projects/#:~:text=all%206%20media-,NitroRush%20%2D%20Mobile%20Game%20Application,-NitroRush%20%2D%20Mobile%20Game",
  },
  {
    id: 2,
    name: "Computer SparePart Web",
    image: ImageFive,
    link: "https://www.linkedin.com/in/nishan-nilanga/details/projects/#:~:text=all%2011%20media-,Computer%20Spare%20Part%20Management%20System%20Web%20Application,-Computer%20Spare%20Part",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
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
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Visit</button>
                      </a>
                    ) : (
                      <button disabled>Link Unavailable</button>
                    )}
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

export default Portfolio;
