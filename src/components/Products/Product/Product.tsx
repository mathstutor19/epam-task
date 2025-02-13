import "./Product.css";
import bottle from "../../../assets/bottle.png";
import ButtonLink from "../../ButtonLink/ButtonLink";
const Product = () => {
  return (
    <div className="product">
      <img className="product__image" src={bottle} alt="bottle" />
      <h3 className="product__title">Bottle</h3>
      <p className="product__text">
        A cript , smooth taste with a splash of citrus and long finish
      </p>
      <button className="prev-button"></button>
      <button className="next-button"></button>
      <div className="button__wrapper">
        <ButtonLink color="red" title="Where to buy" link="/" />
        <ButtonLink color="black" title="Learn More" link="/" />
      </div>
    </div>
  );
};

export default Product;
