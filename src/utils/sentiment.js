const positiveWords = [
  "amazing",
  "clean",
  "comfortable",
  "friendly",
  "great",
  "helped",
  "kind",
  "quickly",
  "spotless",
];

const negativeWords = [
  "bad",
  "broken",
  "complaint",
  "dirty",
  "difficult",
  "disappointed",
  "late",
  "noise",
  "poor",
  "rude",
  "slow",
  "unhappy",
  "unresolved",
  "worst",
];

const negatedPositivePatterns = [
  /\bnot\s+(clean|good|great|comfortable|friendly|helpful|kind)\b/g,
  /\bnever\s+(clean|helpful|friendly)\b/g,
  /\bno\s+(help|support|cleanliness)\b/g,
];

function countMatches(text, words) {
  return words.filter((word) => new RegExp(`\\b${word}\\b`, "i").test(text)).length;
}

export function getSentimentResult(text) {
  const normalized = text.toLowerCase();

  if (!normalized.trim()) {
    return {
      label: "Neutral",
      confidence: "0%",
      answer: "Please enter a guest review to analyze.",
      action: "Type or paste feedback, then run the analyzer.",
    };
  }

  const negatedPositiveCount = negatedPositivePatterns.reduce(
    (total, pattern) => total + (normalized.match(pattern) || []).length,
    0
  );
  const positiveCount = Math.max(0, countMatches(normalized, positiveWords) - negatedPositiveCount);
  const negativeCount = countMatches(normalized, negativeWords) + negatedPositiveCount * 2;

  if (negativeCount > positiveCount) {
    return {
      label: "Negative",
      confidence: `${Math.min(96, 72 + negativeCount * 6)}%`,
      answer: "This review is negative because it mentions service, cleanliness, or experience problems.",
      action: "Respond quickly, apologize clearly, and assign the issue to the right team.",
    };
  }

  if (positiveCount > negativeCount) {
    return {
      label: "Positive",
      confidence: `${Math.min(96, 74 + positiveCount * 6)}%`,
      answer: "This review is positive because it mentions helpful service or a good stay.",
      action: "Thank the guest and note the praised service area for the team.",
    };
  }

  return {
    label: "Neutral",
    confidence: "68%",
    answer: "This review is neutral or mixed because positive and negative signals are balanced.",
    action: "Monitor this theme and compare it with future reviews before escalating.",
  };
}
