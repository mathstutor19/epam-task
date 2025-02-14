import { FC } from "react";
import { Link } from "react-router";
import { ButtonLinkProps } from "./ButtonLink.types";
import "./ButtonLink.css";

const ButtonLink: FC<ButtonLinkProps> = ({ title, link, color }) => {
  return (
    <Link className={`product__link product__link-${color}`} to={link}>
      {title}
    </Link>
  );
};

export default ButtonLink;
