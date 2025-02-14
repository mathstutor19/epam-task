import { Link } from "react-router";
import logo from "../../../assets/react.svg";
import "./Logo.css";
const Logo = () => {
  return (
    <Link className="navbar__link" to="/">
      <img src={logo} alt="logo" className="navbar__logo" />
    </Link>
  );
};

export default Logo;
