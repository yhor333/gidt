import "./App.css";
import SvgBasket from "./components/SvgBasket/SvgBasket";
import ProductCart from "./components/ProductCart/ProductCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state.shop.products);

  return (
    <div>
      <header className="App-header">
        <h1>Shop name</h1>
        <SvgBasket />
      </header>
      <main className="container">
        {products.map((product) => {
          return (
            <div className="product-cart-wrapper">
              <Link to={`${product.id}`} key={product.name + product.id}>
                <ProductCart
                  name={product.name}
                  price={product.price}
                  url={product.url}
                  description={product.description}
                  id={product.id}
                  product={product}
                  isAdded={true}
                />
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
