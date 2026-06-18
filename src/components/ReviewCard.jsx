function ReviewCard({ review, sentiment }) {
  return (
    <div className="card">
      <h3>{sentiment}</h3>

      <p>{review}</p>
    </div>
  );
}

export default ReviewCard;