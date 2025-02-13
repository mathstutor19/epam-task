import "./Products.css";
import HeadingTwo from "../HeadingTwo/HeadingTwo";
import Product from "./Product/Product";

const Products: React.FC = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__title__wrapper">
          <HeadingTwo title=" Our Products" />
          <p className="products__text">
            Make every party a cocktail party. <span>Explore our vodkas.</span>
          </p>
        </div>
        <div className="products__content">
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Products;
