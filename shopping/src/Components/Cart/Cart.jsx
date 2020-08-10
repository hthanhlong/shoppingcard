import React, { useState } from "react";
import "./styles.css";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import { Fade, Zoom } from "react-reveal";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../action/cartaction";
import { useForm } from "react-hook-form";

const Cart = () => {
  //get cartiems from redux store//
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // remove from cart //
  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };
  // animation form state
  const [isOpenForm, setIsOpenForm] = useState(false);

  /// handle form
  const { register, handleSubmit, errors } = useForm();
  const initialState = {
    name: "",
    email: "",
    address: "",
    cartItems: "",
  };
  const [order, setOrder] = useState(initialState);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleCheckOut = () => {
    setIsOpenModal(true);
  };
  const onSubmit = (data) => {
    const order = Object.assign(data, { cartItems: cartItems });
    setOrder(order);
    handleCheckOut();
    localStorage.clear("cartItems");
  };

  ///////

  const closeModal = () => {
    setIsOpenModal(false);
    window.location = "/";
  };

  ///
  return (
    <div className="cartcontent">
      <div className="cartcount">
        {cartItems.length === 0
          ? "Your cart is empty"
          : `You have ${cartItems.length} items in your cart`}
      </div>
      <Fade left cascade>
        <div className="cartitem">
          {cartItems.map((item) => (
            <ul key={item.id}>
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
      {cartItems.length !== 0 && (
        <div>
          <div className="cartbutton">
            Total: $ {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formgroup">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  ref={register({ required: true })}
                />
                {errors.name && (
                  <span className="required">This field is required</span>
                )}
              </div>
              <div className="formgroup">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  ref={register({
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="required">{errors.email.message}</span>
                )}
              </div>
              <div className="formgroup">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  ref={register({ required: true })}
                />
                {errors.address && (
                  <span className="required">This field is required</span>
                )}
              </div>
              <div className="submitbutton">
                <button type="submit">Check Out</button>
              </div>
            </form>
          </div>
        </Zoom>
      )}

      <Modal isOpen={isOpenModal}>
        <Zoom>
          {!order ? (
            ""
          ) : (
            <div className="modal">
              <h1 className="orderstate">Your order has been be placed</h1>
              <CheckCircleOutlineOutlinedIcon style={{ fontSize: 40 }} />
              <ul className="modalprimary">
                <li>Name: {order.name}</li>
                <li>Address: {order.address}</li>
                <li>Email: {order.email}</li>
                <li>Product:</li>
                {!order.cartItems
                  ? ""
                  : order.cartItems.map((item) => (
                      <div>
                        <li>
                          {item.count} x {item.title}
                        </li>
                      </div>
                    ))}
                <li>
                  {" "}
                  Total: ${" "}
                  {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
                </li>
              </ul>
              <div className="modalbtn">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={closeModal}
                >
                  x
                </Button>
              </div>
            </div>
          )}
        </Zoom>
      </Modal>
    </div>
  );
};

export default Cart;
