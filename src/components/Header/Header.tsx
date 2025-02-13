import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/react.svg";
import hamburger from "../../assets/hamburger.svg";
import { Link } from "react-router";
import { navbarLinks } from "../../constant/navbarLink";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <div className="navbar__left">
          <ul className={`navbar__items ${isMenuOpen ? "mobile-menu" : ""}`}>
            {navbarLinks.map((item) => (
              <li key={item.id} className="navbar__item">
                <Link className="navbar__link" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="navbar__link" to="/">
            <img src={logo} alt="logo" className="navbar__logo" />
          </Link>
        </div>
        <ul className="navbar__right">
          <li className="navbar__item navbar__item-right">
            <Link className="navbar__link " to="/">
              Where to Find Us
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link navbar__link-circle" to="/"></Link>
          </li>
        </ul>
        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <img src={hamburger} alt="menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
