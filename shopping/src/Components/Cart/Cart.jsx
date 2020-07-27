import React from "react";
import "./styles.css";

const Cart = (props) => {
  const { cartItem, handleRemoveItem } = props;

  return (
    <div className="cartcontent">
      <div className="cartcount">
        {cartItem.length === 0
          ? "Your cart is empty"
          : `You have ${cartItem.length} items in your cart`}
      </div>
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
    </div>
  );
};

export default Cart;
