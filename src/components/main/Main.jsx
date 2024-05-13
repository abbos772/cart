import React from "react";
import "./MAin.css";
import Gul from "../../img/Gul.png";
const Main = () => {
  return (
    <div className="continer">
      <div className="main">
        <div className="main_text">
          <p>Welcome to GreenShop</p>
          <h1>
            Let’s Make a <br /> Better{" "}
            <b style={{ color: "rgb(70, 163, 88)" }}>Planet</b>
          </h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use <br /> our plants to create an unique Urban
            Jungle. Order your favorite plants!
          </p>
          <button>Shop Now</button>
        </div>
        <div className="main_img">
          <img src={Gul} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
