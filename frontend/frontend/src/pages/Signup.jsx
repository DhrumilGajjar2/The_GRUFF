import { useState } from "react";
import styles from "./Signup.module.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Regex patterns
  const nameRegex = /^[A-Za-z ]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const validate = () => {
    let newErrors = {};

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name must contain at least 3 letters (only alphabets)";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters with uppercase, lowercase, number & special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Signup successful", formData);
      // API call here
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create Account</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.errorInput : ""}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}

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

        <button type="submit">Sign Up</button>
      </form>

      <p className={styles.text}>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}
