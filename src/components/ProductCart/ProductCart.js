import "./ProductCart.css";
import ButtonAddProduct from "../UI/ButtonAddProduct/ButtonAddProduct";

const ProductCart = ({ description, name, price, url, product, isAdded }) => {
  return (
    <div className="product-cart">
      <div className="img-wrapper">
        <img src={url} alt={description}></img>
      </div>
      <div className="description">
        <h3>{name}</h3>
        <p>{price} USD</p>
        {!isAdded ? <ButtonAddProduct product={product} /> : null}
      </div>
    </div>
  );
};

export default ProductCart;
