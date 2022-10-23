import "./App.css";
import SvgBasket from "./components/SvgBasket/SvgBasket";
import ProductCart from "./components/ProductCart/ProductCart";

function App() {
  const products = [
    {
      name: "socks",
      url: "http://sc04.alicdn.com/kf/H700cae71382b41d2ae06dfb7dc86b551t.png",
      price: 14.6,
      description: "socks high quality",
      id: 1,
    },
    {
      name: "razor",
      url: "https://pyxis.nymag.com/v1/imgs/0f9/3e1/a728337cf996524d17bc475956434912c4-merkur-34c.jpg",
      price: 6,
      description: "razor high quality",
      id: 2,
    },
    {
      name: "Shaving cream",
      url: "https://u.makeup.com.ua/6/69/69hhggiynvhu.png",
      price: 7,
      description: "Shaving cream high quality",
      id: 3,
    },
    {
      name: "Birthday cake",
      url: "https://food-images.files.bbci.co.uk/food/recipes/rainbow_cake_20402_16x9.jpg",
      price: 8,
      description: "Birthday cake high quality",
      id: 4,
    },
  ];

  return (
    <div>
      <header className="App-header">
        <h1>Shop name</h1>
        <SvgBasket />
      </header>
      <main className="container">
        {products.map((product) => {
          return (
            <ProductCart
              key={product.name + product.id}
              name={product.name}
              price={product.price}
              url={product.url}
              description={product.description}
              id={product.id}
              product={product}
              isAdded={false}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
