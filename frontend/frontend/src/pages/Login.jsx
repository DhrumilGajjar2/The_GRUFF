import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <form className={styles.form}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>

      <p className={styles.text}>
        Don’t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}
