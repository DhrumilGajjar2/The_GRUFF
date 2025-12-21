import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./CheckoutPage.module.css";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "COD",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateForm() {
    const newErrors = {};
    if (form.phone.length < 10) newErrors.phone = "Phone number must be 10 digits";
    if (form.pincode.length !== 6) newErrors.pincode = "PIN code must be 6 digits";
    if (!form.name || !form.address || !form.city) newErrors.general = "Please fill all required fields";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;
    const orderId = Date.now().toString(36) + Math.floor(Math.random() * 9999);
    clearCart();
    navigate(`/order-success/${orderId}`, {
      state: { total: cartTotal, payment: form.paymentMethod },
    });
  }

  if (cartItems.length === 0) {
    return (
      <section className={`${styles.checkout} ${styles["empty-checkout"]}`}>
        <h2>No items in cart</h2>
      </section>
    );
  }

  return (
    <section className={styles.checkout}>
      <h2>Checkout</h2>

      <div className={styles["checkout-layout"]}>
        {/* Form */}
        <form className={styles["checkout-form"]} onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} maxLength="10" required />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}

          <textarea name="address" placeholder="Full Address" value={form.address} onChange={handleChange} required />
          <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
          <input name="pincode" placeholder="PIN Code" value={form.pincode} onChange={handleChange} maxLength="6" required />
          {errors.pincode && <p className={styles.error}>{errors.pincode}</p>}

          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
            <option value="COD">Cash on Delivery</option>
            <option value="ONLINE">Pay Online (Mock)</option>
          </select>

          {errors.general && <p className={styles.error}>{errors.general}</p>}

          <button type="submit" className={styles["btn-primary"]}>
            Place Order
          </button>
        </form>

        {/* Summary */}
        <aside className={styles["checkout-summary"]}>
          <h3>Order Summary</h3>
          <p>Items: {cartItems.length}</p>
          <p>Total: ₹{cartTotal}</p>
        </aside>
      </div>
    </section>
  );
}
