import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import BasketPage from "./pages/BasketPage/BasketPage";
import Product from "./components/Product/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<App />}></Route>
          <Route path={"/:id/basket"} element={<BasketPage />}></Route>
          <Route path={"basket"} element={<BasketPage />}></Route>
          <Route path="/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
