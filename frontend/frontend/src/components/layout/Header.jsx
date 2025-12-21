import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          THE_GRUFF
        </Link>

        {/* Center Navigation */}
        <div className={styles.navLinks}>
          <Link to="/catalog">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
        </div>

        {/* Right Actions */}
        <div className={styles.actions}>
          <Link to="/login" className={styles.login}>
            Login
          </Link>

          <Link to="/signup" className={styles.signup}>
            Sign Up
          </Link>

          <Link to="/cart" className={styles.cart}>
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}
