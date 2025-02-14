import { Link } from "react-router";
import "./NavbarItem.css";
interface NavbarItemProps {
  item: { id: number; name: string; path: string };
}
[];
const NavbarItem: React.FC<NavbarItemProps> = ({ item }) => {
  return (
    <li  className="navbar__item">
      <Link className="navbar__link" to={item.path}>
        {item.name}
      </Link>
    </li>
  );
};

export default NavbarItem;
