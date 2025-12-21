import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./OrderSuccessPage.module.css";

export default function OrderSuccessPage() {
  const { orderId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const total = location.state?.total;
  const paymentMethod = location.state?.payment;

  useEffect(() => {
    if (!total) {
      navigate("/catalog");
    }
  }, [total, navigate]);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  return (
    <section className={styles["order-success"]}>
      <div className={styles["success-icon"]}>✔️</div>

      <h2>Order Placed Successfully!</h2>

      <p>
        Thank you for shopping with <strong>THE_GRUFF</strong>.
      </p>

      <div className={styles["order-info"]}>
        <p>
          <strong>Order ID:</strong> #{orderId}
        </p>
        <p>
          <strong>Total Paid:</strong> ₹{total}
        </p>
        {paymentMethod && (
          <p>
            <strong>Payment Mode:</strong> {paymentMethod}
          </p>
        )}
        <p>
          <strong>Estimated Delivery:</strong> {deliveryDate.toLocaleDateString("en-IN")}
        </p>
      </div>

      <div className={styles["success-actions"]}>
        <Link to="/catalog" className={styles["btn-primary"]}>
          Continue Shopping
        </Link>

        <button className={styles["btn-secondary"]} disabled>
          View Order Details
        </button>
      </div>
    </section>
  );
}
