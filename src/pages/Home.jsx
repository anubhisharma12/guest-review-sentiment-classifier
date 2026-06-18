import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="page-section hero">
        <div className="hero-inner">
          <p className="eyebrow">Smart sentiment analysis</p>
          <h1>Turn guest reviews into actionable insights.</h1>
          <p>
            Classify feedback automatically and improve guest experience with
            a clean, responsive dashboard for hotels, B&Bs, and hospitality teams.
          </p>

          <div className="hero-actions">
            <Link className="button primary" to="/dashboard">
              View dashboard
            </Link>
            <Link className="button secondary" to="/login">
              Login to continue
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-card">
          <h2 className="page-heading">Customer sentiment at a glance</h2>
          <p>
            Quickly review sample guest feedback and sentiment categories to stay
            ahead of trends, identify growth opportunities, and flag issues as
            they appear.
          </p>

          <div className="cards">
            <ReviewCard
              review="Amazing stay and friendly staff."
              sentiment="Positive"
            />

            <ReviewCard
              review="Room was okay."
              sentiment="Neutral"
            />

            <ReviewCard
              review="Noise from the hallway kept me awake."
              sentiment="Negative"
            />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-card">
          <h2 className="page-heading">Why teams choose this app</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Fast review summaries</h3>
              <p>Scan multiple guest reviews instantly and see sentiment trends at a glance.</p>
            </div>
            <div className="feature-card">
              <h3>Responsive layout</h3>
              <p>Designed for mobile devices and wide desktop displays with smooth reflow.</p>
            </div>
            <div className="feature-card">
              <h3>Clear navigation</h3>
              <p>Navigate between Home, About, Dashboard, and Login with one click.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
