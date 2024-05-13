import React from "react";
import Empty from "../../components/empty/Empty";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "../../context/cardslice";
import trash from "../../img/Trash.png";
import "../cart/Cart.css";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();

  const carts = useSelector((s) => s.cart.value);
  const totalPrice = carts?.reduce(
    (sum, itm) => sum + itm.price * itm.quantity,
    0
  );
  const cartjs = carts?.map((item) => (
    <div key={item.id}>
      <div className="pro_cart">
        <div className="img__pro">
          <img src={item.images[0]} width={50} alt="" />
          <div className="title">
            <h4>{item.title}</h4>
            <p>SKU: 1995751877966</p>
          </div>
        </div>
        <h3>${item.price}</h3>

        <div className="quantity">
          <button
            className="btn_count"
            disabled={item.quantity <= 1}
            onClick={() => dispatch(decrementCartQuantity(item))}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="btn_count"
            onClick={() => dispatch(incrementCartQuantity(item))}
          >
            +
          </button>
        </div>
        <h3 style={{ color: "rgb(70, 163, 88)" }}>
          ${item.price * item.quantity}
        </h3>
        <button
          className="trash"
          onClick={() => dispatch(removeItemFromCart(item))}
        >
          <img src={trash} alt="" />
        </button>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="continer">
        <div className="cart_na">
          <p className="pp">Home/Shop/Shopping Cart</p>
        </div>
        <div className="cart_pro">
          <div className="cart_product">
            <div className="pro_text">
              <div className="text_p">
                <p>Products</p>
                <p className="price_flex">Price</p>
                <p>Quantity</p>
                <p>Total</p>
              </div>
            </div>
            <div className="flex_total">
              {carts.length ? <div>{cartjs}</div> : <Empty text="Cart" />}
            </div>
          </div>
          <div className="carts_total">
            <p>Cart Totals</p>
            <hr className="hr" />
            <p>Coupon Apply</p>
            <div className="apply">
              <input type="text" placeholder="Enter coupon code here..." />
              <button className="btn_a">Apply</button>
            </div>
            <div className="big_total">
              <h3>Total</h3>
              <p className="ppp">${totalPrice}</p>
            </div>
            <NavLink to={"/Admin"}>
              <button className="Proceed">Proceed To Checkout</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
