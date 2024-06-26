import React, { useState } from "react";
import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";
import {} from "../../context/cardslice";
import vica from "../../img/vica.png";

function Admin() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const carts = useSelector((s) => s.cart.value);
  const totalPrice = carts?.reduce(
    (sum, itm) => sum + itm.price * itm.quantity,
    0
  );
  const handleInputChange = (event, inputName) => {
    const value = event.target.value;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: value,
    }));
  };
  const handleButtonClick = () => {
    console.log(inputs);
  };
  const cartjs = carts?.map((item) => (
    <div key={item.id} className="wrp">
      <img src={item.images[0]} width={50} alt="" />
      <div className="title">
        <h4>{item.title}</h4>
        <p>SKU: 1995751877966</p>
      </div>
      <p className="x">(x{item.quantity})</p>
      <h3 style={{ color: "rgb(70, 163, 88)" }}>
        ${item.price * item.quantity}
      </h3>
    </div>
  ));
  return (
    <div className="continer">
      <div className="wrapper_w">
        <div className="input_lar">
          <h3>Billing Address</h3>
          <div className="inp_flex">
            <div className="inp1">
              <p>First Name</p>
              <div className="inp">
                <input
                  onChange={(event) => handleInputChange(event, "input1")}
                  type="text"
                />
              </div>
              <p>Last Name</p>
              <div className="inp">
                <input
                  onChange={(event) => handleInputChange(event, "input2")}
                  type="text"
                />
              </div>
            </div>
            <div className="inp1">
              <p>Age</p>
              <div className="inp">
                <input
                  onChange={(event) => handleInputChange(event, "input3")}
                  type="Number"
                />
              </div>
              <p>Town/City</p>
              <div className="inp">
                <input
                  onChange={(event) => handleInputChange(event, "input4")}
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="wrp_flex">
          {cartjs}
          <div className="carts_total">
            <p>Cart Totals</p>
            <hr className="hr" />
            <p>Coupon Apply</p>

            <div className="big_total">
              <h3>Total</h3>
              <p className="ppp">${totalPrice}</p>
            </div>
            <div className="apply2">
              <input type="radio" name="" id="" />
              <img src={vica} alt="" />
            </div>
            <div className="apply2">
              <input type="radio" />
              <p>Dorect bank transfer</p>
            </div>
            <div className="apply2">
              <input type="radio" />
              <p>Cash on delivery</p>
            </div>
            <button onClick={handleButtonClick} className="Proceed">
              Place Order (Submit)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
