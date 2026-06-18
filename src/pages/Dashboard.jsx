import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Input, Loader, Modal, Toast } from "../components/ui";
import { getSentimentResult } from "../utils/sentiment";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [review, setReview] = useState("The staff solved our issue quickly and kindly.");
  const [showToast, setShowToast] = useState(false);
  const [loginToast, setLoginToast] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(() => getSentimentResult("The staff solved our issue quickly and kindly."));

  useEffect(() => {
    const message = localStorage.getItem("loginSuccessMessage");

    if (message) {
      setLoginToast(message);
      localStorage.removeItem("loginSuccessMessage");
    }
  }, []);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setShowToast(false);

    setTimeout(() => {
      setResult(getSentimentResult(review));
      setIsAnalyzing(false);
      setShowToast(true);
    }, 700);
  };

  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="page-card">
          {loginToast && (
            <Toast
              message={loginToast}
              type="success"
              onClose={() => setLoginToast("")}
              className="dashboard-login-toast"
            />
          )}

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

          <div className="component-showcase review-analyzer">
            <div>
              <h2 className="page-heading">Analyze guest review</h2>
              <p>
                Enter a guest review and get a clear sentiment answer with
                confidence and a recommended action for the hotel team.
              </p>
            </div>

            <div className="showcase-grid">
              <div className="analysis-form">
                <Input
                  label="Sample review"
                  multiline
                  rows={5}
                  value={review}
                  onChange={(event) => setReview(event.target.value)}
                  helperText="Try words like friendly, clean, noise, dirty, or broken."
                />

                <div className="showcase-actions">
                  <Button type="button" onClick={handleAnalyze} isLoading={isAnalyzing}>
                    {isAnalyzing ? "Analyzing..." : "Analyze review"}
                  </Button>
                  <Button type="button" variant="secondary" onClick={() => setIsModalOpen(true)}>
                    View details
                  </Button>
                </div>
              </div>

              <div className="analysis-result review-answer">
                {isAnalyzing ? (
                  <div className="analysis-loading">
                    <Loader size="lg" />
                    <span>Analyzing review stream</span>
                  </div>
                ) : (
                  <>
                    <span className={`sentiment-pill sentiment-pill--${result.label.toLowerCase()}`}>
                      {result.label}
                    </span>
                    <h3>{result.confidence} confidence</h3>
                    <p>{result.answer}</p>
                    <div className="recommendation-box">
                      <strong>Recommended action</strong>
                      <span>{result.action}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="demo-tools">
              <Button type="button" variant="ghost" onClick={() => setShowToast(true)}>
                Show toast
              </Button>
              <div className="loader-demo">
                <Loader />
                <span>Live review monitoring</span>
              </div>
            </div>

            {showToast && (
              <Toast
                message={`Answer ready: ${result.label} sentiment with ${result.confidence} confidence.`}
                type="info"
                onClose={() => setShowToast(false)}
              />
            )}
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        title="Review analysis details"
        onClose={() => setIsModalOpen(false)}
        footer={
          <Button type="button" size="sm" onClick={() => setIsModalOpen(false)}>
            Done
          </Button>
        }
      >
        <div className="modal-analysis">
          <p>{result.answer}</p>
          <p>
            Recommendation: {result.action}
          </p>
        </div>
      </Modal>

      <Footer />
    </>
  );
}

export default Dashboard;
