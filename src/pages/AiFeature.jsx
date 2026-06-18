import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Input, Loader, Toast } from "../components/ui";
import { getSentimentResult } from "../utils/sentiment";

function AiFeature() {
  const [review, setReview] = useState("The staff was friendly, but the hallway noise was difficult at night.");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const result = useMemo(() => getSentimentResult(review), [review]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setShowToast(false);

    setTimeout(() => {
      setIsAnalyzing(false);
      setShowToast(true);
    }, 900);
  };

  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="page-card">
          <div className="section-header">
            <div>
              <p className="eyebrow">AI feature screen</p>
              <h1 className="page-heading">Sentiment analyzer</h1>
              <p>
                Paste a guest review and preview how the classifier labels the
                sentiment, confidence, and recommended next step.
              </p>
            </div>
          </div>

          <div className="ai-panel">
            <div className="analysis-form">
              <Input
                label="Guest review"
                multiline
                rows={5}
                value={review}
                onChange={(event) => setReview(event.target.value)}
                helperText="Try words like clean, friendly, noise, or broken."
              />
              <Button type="button" onClick={handleAnalyze} isLoading={isAnalyzing}>
                {isAnalyzing ? "Analyzing..." : "Analyze sentiment"}
              </Button>
            </div>

            <div className="analysis-result">
              {isAnalyzing ? (
                <div className="analysis-loading">
                  <Loader size="lg" />
                  <span>Reading sentiment signals</span>
                </div>
              ) : (
                <>
                  <span className={`sentiment-pill sentiment-pill--${result.label.toLowerCase()}`}>
                    {result.label}
                  </span>
                  <h2>{result.confidence} confidence</h2>
                  <p>{result.action}</p>
                </>
              )}
            </div>
          </div>

          {showToast && (
            <Toast
              message="Analysis complete. Result updated in the preview panel."
              type="info"
              onClose={() => setShowToast(false)}
            />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AiFeature;
