import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h2>Guest Review Sentiment Classifier</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/ai-feature">AI Feature</Link>
        <Link to="/login">Login</Link>
      </div>

      <button className="theme-toggle" type="button" onClick={toggleTheme}>
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </button>
    </nav>
  );
}

export default Navbar;
