import hamburger from "../../../assets/hamburger.svg";
import { MenuButtonProps } from "./Hamburger.type";
import "./HamburgerMenu.css";

const HamburgerMenu: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="menu-button" aria-label="Toggle Menu">
      <img className="menu-icon" src={hamburger} alt="hamburger-menu" />
    </button>
  );
};

export default HamburgerMenu;
