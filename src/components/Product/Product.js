import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Product.css";
import ProductCart from "../ProductCart/ProductCart";
import SvgBasket from "../SvgBasket/SvgBasket";
import ButtonAddProduct from "../UI/ButtonAddProduct/ButtonAddProduct";
import { useEffect } from "react";
import { useState } from "react";

const Product = () => {
  const products = useSelector((state) => state.shop.products);
  let { id } = useParams();
  let productIndex = products.findIndex((product) => product.id === +id);
  let product = products[productIndex];
  let [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        setTotalPrice((prev) => +prev + +e.target.attributes.price.value / 2);
      });
    });
  }, []);

  return (
    <div>
      <header className="App-header">
        <h1>Shop name</h1>
        <SvgBasket />
      </header>
      <main className="product container">
        <div className="product__wrapper">
          <img src={product.url} alt={product.description}></img>
        </div>
        <div className="product__description">
          <h3>name: {product.name}</h3>
          <hr />
          <h4>price: {product.price} USD </h4>
          <div className="product__addons">
            <h4>Addons</h4>
            {product.addons.map((addon) => {
              return (
                <ProductCart
                  key={addon.id}
                  name={addon.name}
                  price={addon.price}
                  url={addon.url}
                  description={addon.description}
                  id={addon.id}
                  product={addon}
                  isAdded={false}
                />
              );
            })}
          </div>
          <ButtonAddProduct product={product} totalPrice={totalPrice} />
        </div>
      </main>
    </div>
  );
};

export default Product;
