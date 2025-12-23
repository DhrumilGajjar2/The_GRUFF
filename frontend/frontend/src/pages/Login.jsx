import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validate = () => {
    let newErrors = {};

    if(!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters, include uppercase, lowercase, and special character.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(validate()) {
      console.log("Login successful", formData);

    }
  };
  
  
  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.errorInput : ""}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? styles.errorInput : ""}
        />
        {errors.password && (
          <span className={styles.error}>{errors.password}</span>
        )}
        <button type="submit">Login</button>
      </form>

      <p className={styles.text}>
        Don’t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}
