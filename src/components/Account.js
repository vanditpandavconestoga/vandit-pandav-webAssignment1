import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

// This component is for account

function Account() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    shippingAddress: "",
  });

  // This function is use for change and set value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // This function is use for show alert
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account details saved successfully!");
  };

  return (
    <div>
      <h2>Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="shippingAddress" className="form-label">
            Shipping Address:
          </label>
          <textarea
            id="shippingAddress"
            name="shippingAddress"
            value={userInfo.shippingAddress}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <Button type="submit" variant="primary">
          Save
        </Button>
        <Link
          to="/cart"
          style={{ marginLeft: "5px" }}
          className="btn btn-secondary"
        >
          Back to Cart
        </Link>
      </form>
    </div>
  );
}

export default Account;
