import SearchInput from "../SearchInput/SearchInput";
import "./Content.css";
const Content = () => {
  return (
    <div className="welcome__content">
      <h3 className="welcome__content__title">
        We're here to help you make the most of cocktail hours
      </h3>
      <SearchInput
        placeholder="Search for ..."
        className="welcome__input"
        type="text"
      />
      <p className="welcome__text">
        Browse our curated cocktail by cocktail name, occasion or key ingredient
      </p>
    </div>
  );
};

export default Content;
