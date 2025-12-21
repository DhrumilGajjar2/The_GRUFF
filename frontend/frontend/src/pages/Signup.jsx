import styles from "./Signup.module.css";

export default function Signup() {
  return (
    <div className={styles.container}>
      <h1>Create Account</h1>

      <form className={styles.form}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Sign Up</button>
      </form>

      <p className={styles.text}>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}
