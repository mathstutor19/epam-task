import "./Product.css";
import bottle from "../../../assets/bottle.png";
import ButtonLink from "../ButtonLink/ButtonLink";
import SliderButton from "../SliderButton/SliderButton";
const Product = () => {
  return (
    <div className="products__content">
      <div className="product">
        <img className="product__image" src={bottle} alt="bottle" />
        <h3 className="product__title">Bottle</h3>
        <p className="product__text">
          A cript , smooth taste with a splash of citrus and long finish
        </p>
        <SliderButton className="prev-button" />
        <SliderButton className="next-button" />
        <div className="button__wrapper">
          <ButtonLink color="red" title="Where to buy" link="/" />
          <ButtonLink color="black" title="Learn More" link="/" />
        </div>
      </div>
    </div>
  );
};

export default Product;
