import "./BasketPage.css";
import "../../App.css";
import { useSelector } from "react-redux";
import ProductCart from "../../components/ProductCart/ProductCart";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BasketPage = () => {
  const [value, onChange] = useState(new Date());
  const [minvalue] = useState(addDays(new Date(), 2));
  let [messageError, setMessageError] = useState("");
  const addedProducts = useSelector((state) => state.basket.products);

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function isEmoji(str) {
    var ranges = [
      "(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])",
    ];
    if (str.match(ranges.join("|"))) {
      return true;
    } else {
      return false;
    }
  }

  function inputMessageHandler(e) {
    const value = e.target.value;
    if (value.length > 35) {
      e.target.classList.add("error");
      setMessageError("Length message must be less than 35 symbols");
    }
    if (isEmoji(value)) {
      e.target.classList.add("error");
      setMessageError("You can't use emoji");
    }
    if (isEmoji(value) && value.length > 35) {
      setMessageError(
        "Length message must be less than 35 symbols and you can't use emoji"
      );
    }
    if (value.length < 35 && !isEmoji(value)) {
      e.target.classList.remove("error");
      setMessageError("");
    }
  }

  return (
    <div>
      <header className="App-header">
        <h1>Shop name</h1>
      </header>
      <main className="content">
        <ul>
          <h4>Added products: </h4>
          {addedProducts.map((product, index) => {
            return (
              <div className="added-product-wrapper">
                <li key={index}>
                  <ProductCart
                    name={product.name}
                    price={product.price}
                    url={product.url}
                    description={product.description}
                    id={product.id}
                    product={product}
                    isAdded={true}
                  />
                </li>
              </div>
            );
          })}
        </ul>
        <form>
          <label className="label-massage">
            Enter your message here
            <input
              className="message"
              onChange={(e) => inputMessageHandler(e)}
            ></input>
            <span className="error">{messageError}</span>
          </label>
          <p>Select wrapping</p>
          <div className="wrapping">
            <input className="radio" type="radio" name="wrapp" id="id1"></input>
            <label className="label-radio" htmlFor="id1">
              <img
                src="https://pngimg.com/uploads/gift/gift_PNG5973.png"
                alt="123"
              ></img>
            </label>
            <input className="radio" type="radio" name="wrapp" id="id2"></input>
            <label className="label-radio" htmlFor="id2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DW2EobRXqxGdv4v9evX_GP4ISd9PjPDgAQ&usqp=CAU"
                alt="12"
              ></img>
            </label>
          </div>
          <div className="clendar-wrapper">
            <p>Select date of receiving</p>
            <Calendar onChange={onChange} value={value} minDate={minvalue} />
          </div>
        </form>
      </main>
    </div>
  );
};

export default BasketPage;
