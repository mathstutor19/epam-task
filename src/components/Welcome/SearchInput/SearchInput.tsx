import React from "react";
import { SearchInputProps } from "./SearchInput.type";
import "./SearchInput.css";
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  className = "",
  type,
}) => {
  return (
    <input
      className={`search-input ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
