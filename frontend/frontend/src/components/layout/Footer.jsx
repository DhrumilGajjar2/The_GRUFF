import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        {/* Brand */}
        <div>
          <h2>THE_GRUFF</h2>
          <p>Everyday Pants & Denim — Built for comfort, made for style.</p>
        </div>

        {/* Shop Links */}
        <div>
          <h3>Shop</h3>
          <ul>
            <li>Pants</li>
            <li>Denims</li>
            <li>Shorts</li>
            <li>New Arrivals</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3>Customer</h3>
          <ul>
            <li>Track Order</li>
            <li>Return & Refund</li>
            <li>Shipping Policy</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3>Stay Updated</h3>
          <p>Get updates on new collections and offers.</p>

          <div>
            <input type="email" placeholder="Enter your email" />
            <button>Join</button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div>© {year} THE_GRUFF. All rights reserved.</div>
    </footer>
  );
}
