import { Link } from "react-router";
import "./Profil.css";
const Profil = () => {
  return (
    <ul className="navbar__right">
      <li className="navbar__item navbar__item-right">
        <Link className="navbar__link " to="/">
          Where to Find Us
        </Link>
      </li>
      <li className="navbar__item">
        <Link
          aria-label="profil"
          className="navbar__link navbar__link-circle"
          to="/"
        ></Link>
      </li>
    </ul>
  );
};

export default Profil;
