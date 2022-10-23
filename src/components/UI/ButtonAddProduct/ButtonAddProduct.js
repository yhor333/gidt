import "./ButtonAddProduct.css";
import { increment } from "../../../store/counterSlice";
import { addProdut } from "../../../store/basketSlice";
import { useDispatch } from "react-redux";

const ButtonAddProduct = ({ product, totalPrice, setTotalPrice }) => {
  const dispathc = useDispatch();

  const addProductButtonHandler = (event) => {
    event.target.classList.add("success");
    event.target.disabled = true;
    dispathc(increment());
    dispathc(addProdut(product));
  };
  return (
    <div>
      {totalPrice ? (
        <p className="product__price">total price {totalPrice} USD</p>
      ) : null}
      <button
        onClick={addProductButtonHandler}
        className="button"
        price={product.price}
      >
        Add product
      </button>
    </div>
  );
};

export default ButtonAddProduct;
