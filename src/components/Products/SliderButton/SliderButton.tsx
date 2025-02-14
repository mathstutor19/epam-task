import React from "react";
import { ButtonProps } from "./SliderButton.type";
import "./SliderButton.css";
const SliderButton: React.FC<ButtonProps> = ({
  className = "",
  onClick,
  children,
}) => {
  return (
    <button
      aria-label={`Area ${className}`}
      className={`${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SliderButton;
