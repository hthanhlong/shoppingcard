import React from "react";

const checkout = () => {
  return (
    <div>
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
    </div>
  );
};

export default checkout;
