import React from "react";
import "./Products.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cardslice";

// Trust but Verify
const Products = ({ data, title }) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);

  const dispatch = useDispatch();

  let productItems = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.images[0]} alt="" />
      <h3>{el.title}</h3>
      <div className="pro">
        <h3 style={{ color: "rgb(70, 163, 88)" }}>${el.price}</h3>
        <div className="pro2">
          <button className="cart_btn" onClick={() => dispatch(toggleLike(el))}>
            {wishlist?.some((item) => item.id === el.id) ? (
              <FaHeart className="cart_btn" style={{ color: "red" }} />
            ) : (
              <FaRegHeart className="cart_btn" />
            )}
          </button>
          <button className="cart_btn" onClick={() => dispatch(addToCart(el))}>
            <IoCartOutline className="cart_btn" />
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <h2>{title}</h2>
      <div className="wrapper">{productItems}</div>
    </div>
  );
};

export default Products;
