import React, { useState } from "react";
import "./styles.css";
import { Fade, Zoom } from "react-reveal";

const Cart = (props) => {
  const { cartItem, handleRemoveItem, handleSubmitform2 } = props;
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleOnChange = (e) => {
    setName((e.target.name = e.target.value));
    setEmail((e.target.email = e.target.value));
    setAddress((e.target.address = e.target.value));
  };

  const handleSubmitform = (e) => {
    e.preventDefault();
    const order = {
      name,
      email,
      address,
      cartItem,
    };
    handleSubmitform2(order);
  };

  return (
    <div className="cartcontent">
      <div className="cartcount">
        {cartItem.length === 0
          ? "Your cart is empty"
          : `You have ${cartItem.length} items in your cart`}
      </div>
      <Fade left cascade>
        <div className="cartitem">
          {cartItem.map((item) => (
            <ul key={item._id}>
              <li>
                <img src={item.image} alt={item.title} />
                <div className="cartmain">
                  <div className="carttitle">
                    {item.title}
                    <div>
                      {item.count} x ${item.price}{" "}
                      <div className="buttn">
                        <button onClick={() => handleRemoveItem(item)}>
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </Fade>
      {cartItem.length !== 0 && (
        <div>
          <div className="cartbutton">
            Total: $ {cartItem.reduce((a, c) => a + c.price * c.count, 0)}
            <div>
              <button onClick={() => setIsOpenForm(!isOpenForm)}>
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
      {!isOpenForm ? (
        ""
      ) : (
        <Zoom>
          <div className="form">
            <form>
              <div className="formgroup">
                <label>Name</label>
                <input
                  type="text"
                  required
                  name="name"
                  onChange={handleOnChange}
                ></input>
              </div>
              <div className="formgroup">
                <label>Email</label>
                <input
                  type="email"
                  required
                  name="name"
                  onChange={handleOnChange}
                ></input>
              </div>
              <div className="formgroup">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  onChange={handleOnChange}
                ></input>
              </div>
              <div className="submitbutton">
                <button type="submit" onClick={handleSubmitform}>
                  Check Out
                </button>
              </div>
            </form>
          </div>
        </Zoom>
      )}
    </div>
  );
};

export default Cart;
