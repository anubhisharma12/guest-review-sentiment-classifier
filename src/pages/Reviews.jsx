import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Input, Toast } from "../components/ui";
import { getSentimentResult } from "../utils/sentiment";

const REVIEWS_STORAGE_KEY = "guestReviewQueue";

const initialReviews = [
  {
    id: "RV-1042",
    guest: "Mira Patel",
    room: "204",
    sentiment: "Positive",
    score: "94%",
    text: "The front desk team helped us check in early and the room was spotless.",
    action: "Send thank-you reply",
  },
  {
    id: "RV-1043",
    guest: "Daniel Kim",
    room: "118",
    sentiment: "Neutral",
    score: "63%",
    text: "Breakfast was fine, but the coffee station ran out twice during the morning rush.",
    action: "Share with restaurant team",
  },
  {
    id: "RV-1044",
    guest: "Asha Rao",
    room: "311",
    sentiment: "Negative",
    score: "88%",
    text: "The hallway noise made it difficult to sleep and the issue was not resolved.",
    action: "Escalate to manager",
  },
];

function Reviews() {
  const [reviews, setReviews] = useState(() => {
    try {
      const savedReviews = JSON.parse(localStorage.getItem(REVIEWS_STORAGE_KEY) || "[]");
      return Array.isArray(savedReviews) && savedReviews.length > 0 ? savedReviews : initialReviews;
    } catch {
      return initialReviews;
    }
  });
  const [selectedId, setSelectedId] = useState(() => {
    try {
      const savedReviews = JSON.parse(localStorage.getItem(REVIEWS_STORAGE_KEY) || "[]");
      return Array.isArray(savedReviews) && savedReviews.length > 0
        ? savedReviews[0].id
        : initialReviews[0].id;
    } catch {
      return initialReviews[0].id;
    }
  });
  const [toastMessage, setToastMessage] = useState("");
  const [formData, setFormData] = useState({
    guest: "",
    room: "",
    text: "",
  });
  const [formError, setFormError] = useState("");

  const selectedReview = useMemo(
    () => reviews.find((review) => review.id === selectedId) || reviews[0],
    [reviews, selectedId]
  );

  useEffect(() => {
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
    setFormError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.guest.trim() || !formData.room.trim() || !formData.text.trim()) {
      setFormError("Please enter guest name, room, and review.");
      return;
    }

    const result = getSentimentResult(formData.text);
    const id = `RV-${Date.now()}`;
    const newReview = {
      id,
      guest: formData.guest.trim(),
      room: formData.room.trim(),
      sentiment: result.label,
      score: result.confidence,
      text: formData.text.trim(),
      action: result.action,
    };

    setReviews((current) => [newReview, ...current]);
    setSelectedId(id);
    setFormData({ guest: "", room: "", text: "" });
    setToastMessage("Review added to the guest review queue.");
  };

  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="page-card">
          <div className="section-header">
            <div>
              <p className="eyebrow">Detail/List view</p>
              <h1 className="page-heading">Guest review queue</h1>
              <p>
                Review recent feedback, compare sentiment confidence, and open
                the detail panel for the next action.
              </p>
            </div>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setToastMessage("Review queue export prepared for the weekly report.")}
            >
              Export list
            </Button>
          </div>

          {toastMessage && (
            <Toast
              message={toastMessage}
              type="success"
              onClose={() => setToastMessage("")}
            />
          )}

          <form className="add-review-form" onSubmit={handleSubmit}>
            <div className="add-review-form__header">
              <h2>Add guest review</h2>
              <p>Enter a new review and it will be analyzed and added to the queue.</p>
            </div>

            <div className="add-review-grid">
              <Input
                label="Guest name"
                name="guest"
                placeholder="Guest name"
                value={formData.guest}
                onChange={handleChange}
              />
              <Input
                label="Room"
                name="room"
                placeholder="Room number"
                value={formData.room}
                onChange={handleChange}
              />
            </div>

            <Input
              label="Review"
              name="text"
              multiline
              rows={4}
              placeholder="Type the guest review here..."
              value={formData.text}
              onChange={handleChange}
              error={formError}
            />

            <Button type="submit">Add review to queue</Button>
          </form>

          <div className="review-workspace">
            <div className="review-list" aria-label="Guest review list">
              {reviews.map((review) => (
                <button
                  className={review.id === selectedId ? "review-row review-row--active" : "review-row"}
                  key={review.id}
                  type="button"
                  onClick={() => setSelectedId(review.id)}
                >
                  <span>
                    <strong>{review.guest}</strong>
                    <small>{review.id} - Room {review.room}</small>
                  </span>
                  <span className={`sentiment-pill sentiment-pill--${review.sentiment.toLowerCase()}`}>
                    {review.sentiment}
                  </span>
                </button>
              ))}
            </div>

            <article className="review-detail">
              <span className={`sentiment-pill sentiment-pill--${selectedReview.sentiment.toLowerCase()}`}>
                {selectedReview.sentiment}
              </span>
              <h2>{selectedReview.guest}</h2>
              <p>{selectedReview.text}</p>

              <dl className="detail-grid">
                <div>
                  <dt>Confidence</dt>
                  <dd>{selectedReview.score}</dd>
                </div>
                <div>
                  <dt>Room</dt>
                  <dd>{selectedReview.room}</dd>
                </div>
                <div>
                  <dt>Recommended action</dt>
                  <dd>{selectedReview.action}</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Reviews;
