import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../Constant/ProductArr";
import { Button } from "react-bootstrap";

//  This is productdetails page and also in this page i handle all the cart functinoality

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const totalPrice = product.price * quantity;

  // This function is use for the add product in add to cart
  const handleAddToCart = () => {
    addToCart({ ...product, quantity, totalPrice });

    // Redirect to the shopping cart page
    navigate("/cart");
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
        />
      </p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
}

export default ProductDetails;
