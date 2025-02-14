import { Link } from "react-router";
import "./NavbarItem.css";
import { NavbarItemProps } from "./NavbarItem.type";

const NavbarItem: React.FC<NavbarItemProps> = ({ item }) => {
  return (
    <li className="navbar__item">
      <Link className="navbar__link" to={item.path}>
        {item.name}
      </Link>
    </li>
  );
};

export default NavbarItem;
