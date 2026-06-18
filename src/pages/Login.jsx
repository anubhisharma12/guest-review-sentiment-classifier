import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="login-container">
          <div className="login-content">
            <h1 className="page-heading">Welcome back</h1>
            <p className="login-subtitle">
              Sign in to access your review dashboard and sentiment analytics.
            </p>

            <LoginForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;
