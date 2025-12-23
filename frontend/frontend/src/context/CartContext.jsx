import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

// ---------- Helpers ----------
const getInitialCart = () => {
  try {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage", error);
    return [];
  }
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart);

  // ---------- Persist Cart ----------
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ---------- Add to Cart ----------
  function addToCart(product, selectedSize, selectedColor, quantity = 1) {
    if (quantity <= 0) return;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === selectedSize &&
          item.color === selectedColor
      );

      if (existingIndex !== -1) {
        return prev.map((item, i) =>
          i === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: selectedSize,
          color: selectedColor,
          quantity,
        },
      ];
    });
  }

  // ---------- Remove Item ----------
  function removeFromCart(id, size, color) {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size &&
            item.color === color
          )
      )
    );
  }

  // ---------- Update Quantity ----------
  function updateQuantity(id, size, color, newQty) {
    if (newQty <= 0) {
      removeFromCart(id, size, color);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: newQty }
          : item
      )
    );
  }

  // ---------- Clear Cart ----------
  function clearCart() {
    setCartItems([]);
  }

  // ---------- Derived State ----------
  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    cartTotal,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// ---------- Custom Hook Safety ----------
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
