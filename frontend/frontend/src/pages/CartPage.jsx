import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./CartPage.module.css";

export default function CartPage() {
  const {
    cartItems,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <section className={`${styles.cart} ${styles["empty-cart"]}`}>
        <h2>Your cart is empty</h2>
        <Link to="/catalog" className="link-primary">
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.cart}>
      <h2>Your Cart</h2>

      <div className={styles["cart-layout"]}>
        <div className={styles["cart-items"]}>
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}-${item.color}`}
              className={styles["cart-item"]}
            >
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => (e.target.src = "/placeholder.png")}
              />

              <div className={styles["cart-item-info"]}>
                <h3>{item.name}</h3>

                <p className={styles.meta}>
                  Size: <strong>{item.size}</strong> | Color:{" "}
                  <strong>{item.color}</strong>
                </p>

                <p className={styles.price}>₹{item.price}</p>

                <div className={styles["cart-item-controls"]}>
                  <label>Qty:</label>

                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item.id,
                        item.size,
                        item.color,
                        Number(e.target.value)
                      )
                    }
                  />

                  <button
                    type="button"
                    className={`${styles["btn-secondary"]} ${styles["remove-btn"]}`}
                    onClick={() =>
                      removeFromCart(item.id, item.size, item.color)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className={styles["cart-summary"]}>
          <h3>Summary</h3>

          <p>
            Subtotal: <strong>₹{cartTotal}</strong>
          </p>
          <p>Shipping: Calculated at checkout</p>

          <p className={styles["cart-total"]}>
            Total: <strong>₹{cartTotal}</strong>
          </p>

          <button
            className={styles["btn-primary"]}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </section>
  );
}
