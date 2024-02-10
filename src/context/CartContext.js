import React, { createContext, useContext, useState } from "react";

// This is cartContext page for update , remove and add to cart product
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const TAX_RATE = 0.1;
  const [cart, setCart] = useState([]);

  // This function use for add product in cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const totalPrice = calculateTotalPrice(product.price, 1);
        return [...prevCart, { ...product, quantity: 1, totalPrice }];
      }
    });
  };

  // This function use for update product in cart
  const updateCartItem = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(quantity, 1),
              totalPrice: calculateTotalPrice(item.price, quantity),
            }
          : item
      )
    );
  };

  // This function use for remove product in cart
  const removeCartItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // This function use for clear product from the cart
  const clearCart = () => {
    setCart([]);
  };
  // This function use for finalize purchase
  const finalizePurchase = () => {
    alert("Purchase finalized! Thank you for shopping!");
    clearCart();
  };

  // This function use for the calculate price
  const calculateTotalPrice = (price, quantity) => {
    const subtotal = price * quantity;
    const tax = subtotal * TAX_RATE;
    return subtotal + tax;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartItem,
        removeCartItem,
        finalizePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//  This is for cart product data
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
