import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Toast } from "./ui";

const DEMO_USERS = [
  {
    email: "admin@example.com",
    password: "Admin@123",
  },
  {
    email: "sharmaanubhi189@gmail.com",
    password: "khushi@122006",
  },
];

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

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

    if (formError) {
      setFormError("");
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        const email = formData.email.trim().toLowerCase();
        const password = formData.password;
        const matchedUser = DEMO_USERS.find(
          (user) => user.email === email && user.password === password
        );

        if (matchedUser) {
          localStorage.setItem(
            "guestReviewAuth",
            JSON.stringify({
              isAuthenticated: true,
              email: matchedUser.email,
              loggedInAt: new Date().toISOString(),
            })
          );
          localStorage.setItem("loginSuccessMessage", "Login successful");
          navigate("/dashboard");
          return;
        }

        setLoading(false);
        setFormError("Invalid email or password");
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
      <div className="login-form__header">
        <p>Enter your account details to continue.</p>
      </div>

      <Input
        label="Email address"
        id="email"
        type="email"
        name="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email && touched.email ? errors.email : ""}
      />

      <div className="password-field">
        <Input
          label="Password"
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password && touched.password ? errors.password : ""}
        />
        <button
          className="password-toggle"
          type="button"
          onClick={() => setShowPassword((current) => !current)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <div className="login-options">
        <a href="#forgot-password" className="link">
          Forgot Password?
        </a>
      </div>

      {formError && <Toast message={formError} type="error" />}

      <Button type="submit" className="submit-btn" isLoading={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>

    </form>
  );
}

export default LoginForm;
