import "./ProductCart.css";
import { increment } from "../../store/counterSlice";
import { addProdut } from "../../store/basketSlice";
import { useDispatch } from "react-redux";

const ProductCart = ({ description, name, price, url, product, isAdded }) => {
  const dispathc = useDispatch();

  const addProductButtonHandler = (event) => {
    event.target.classList.add("success");
    event.target.disabled = true;
    dispathc(increment());
    dispathc(addProdut(product));
  };
  return (
    <div className="product-cart">
      <div className="img-wrapper">
        <img src={url} alt={description}></img>
      </div>
      <div className="description">
        <h3>{name}</h3>
        <p>{price} USD</p>
        {!isAdded ? (
          <button onClick={addProductButtonHandler} className="button">
            Add product
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCart;
