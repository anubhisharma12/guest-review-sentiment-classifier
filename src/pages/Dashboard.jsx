import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="page-card">
          <h1 className="page-heading">Dashboard</h1>
          <p>
            Review analytics and sentiment summary are displayed in a clean,
            accessible layout so your team can act on insights quickly.
          </p>

          <div className="cards">
            <div className="card">
              <h3>Positive reviews</h3>
              <p>256 reviews rated as positive this week.</p>
            </div>
            <div className="card">
              <h3>Neutral reviews</h3>
              <p>72 reviews rated as neutral this week.</p>
            </div>
            <div className="card">
              <h3>Negative reviews</h3>
              <p>18 reviews rated as negative, flagged for follow-up.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;