import React from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";
import { useCart } from "../context/CartContext";

//  This Com is shoppingcart

function ShoppingCart() {
  const { cart, updateCartItem, removeCartItem, finalizePurchase } = useCart();

  // This function use for the calculate Data with product

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const tax = 0.1 * subtotal; // 10% tax
    return subtotal + tax;
  };

  // this is html rendering
  return (
    <div>
      <h2 className="mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <p>Name :{item.name}</p>
                <p>Price :{item.price}</p>
                <p>Tax: "10%"</p>
              </div>
              <div className="d-flex">
                <Button
                  variant="outline-primary"
                  onClick={() => updateCartItem(item.id, item.quantity + 1)}
                >
                  +
                </Button>
                <span className="mx-2 mt-2">{item.quantity}</span>
                <Button
                  variant="outline-primary"
                  onClick={() => updateCartItem(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <Button
                  variant="outline-danger"
                  style={{ marginLeft: "5px" }}
                  onClick={() => removeCartItem(item.id)}
                >
                  Remove
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <div className="mt-3">
        <p>Subtotal: ${calculateTotal()}</p>
        <Link to="/" className="btn btn-secondary me-2">
          Continue Shopping
        </Link>
        {cart.length > 0 && (
          <Button variant="success" onClick={finalizePurchase}>
            Finalize Purchase
          </Button>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
