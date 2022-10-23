import "./SvgBasket.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SvgBasket(props) {
  const count = useSelector((state) => state.counter.value);
  return (
    <Link to="basket">
      <div className="SvgBasket">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 16 16"
        >
          <path
            fill="#fff"
            d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"
          ></path>
        </svg>
        {count ? <span>{count}</span> : null}
      </div>
    </Link>
  );
}

export default SvgBasket;
