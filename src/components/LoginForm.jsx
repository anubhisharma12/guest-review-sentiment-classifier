import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        console.log("Form submitted:", formData);
        setFormData({ email: "", password: "" });
        setTouched({});
        setTimeout(() => setSubmitted(false), 4000);
      }, 1200);
    } else {
      setErrors(newErrors);
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
          aria-invalid={errors.email && touched.email ? "true" : "false"}
          aria-describedby={errors.email && touched.email ? "email-error" : undefined}
        />
        {errors.email && touched.email && (
          <span id="email-error" className="error-message">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
          aria-invalid={errors.password && touched.password ? "true" : "false"}
          aria-describedby={errors.password && touched.password ? "password-error" : undefined}
        />
        {errors.password && touched.password && (
          <span id="password-error" className="error-message">
            {errors.password}
          </span>
        )}
      </div>

      <button type="submit" className="button primary submit-btn" disabled={loading}>
        {loading ? (
          <span className="button-loading">
            <span className="spinner"></span>
            Signing in...
          </span>
        ) : (
          "Sign in"
        )}
      </button>

      {submitted && (
        <div className="success-message" role="status">
          ✓ Login successful! Welcome back.
        </div>
      )}

      <p className="form-footer">
        Don't have an account?{" "}
        <a href="#signup" className="link">
          Create one
        </a>
      </p>
    </form>
  );
}

export default LoginForm;
