import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import './styles.scss';

const data = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT ME', to: '/about' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'PORTFOLIO', to: '/portfolio' },
  { label: 'CONTACT', to: '/contact' },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks current page index
  const navigate = useNavigate();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleNavIconClick = () => {
    // Go to the next page in the data array
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    navigate(data[nextIndex].to); // Programmatically navigate
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link className="navbar__container__menu__item__links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Nav Icon that cycles through pages */}
        <div className="nav-icon" onClick={handleNavIconClick}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
