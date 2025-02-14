import React, { useState } from "react";
import "./Header.css";
import { navbarLinks } from "../../constant/navbarLink";
import Logo from "./Logo/Logo";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Profil from "./Profil/Profil";
import NavbarItem from "./NavbarItem/NavbarItem";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <div className="navbar__left">
          <ul className={`navbar__items ${isMenuOpen ? "mobile-menu" : ""}`}>
            {navbarLinks.map((item) => (
              <NavbarItem key={item.id} item={item} />
            ))}
          </ul>
          <Logo />
        </div>
        <Profil />
        <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
    </nav>
  );
};

export default Navbar;
