import "./Content.css";
const Content = () => {
  return (
    <div className="welcome__content">
      <h3 className="welcome__content__title">
        We're here to help you make the most of cocktail hours
      </h3>
      <input
        className="welcome__input"
        type="text"
        placeholder="Search for ..."
      />
      <p className="welcome__text">
        Browse our curoud cocktail by coctail name, occasion or key ingredient
      </p>
    </div>
  );
};

export default Content;
