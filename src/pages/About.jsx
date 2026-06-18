import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="page-card">
          <h1 className="page-heading">About Guest Review Sentiment Classifier</h1>
          <p>
            We help hospitality teams transform guest feedback into actionable insights.
            Our AI-powered sentiment analysis tool classifies reviews instantly, enabling
            hotels, B&Bs, and hospitality businesses to respond faster and improve guest
            satisfaction.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-card">
          <h2 className="page-heading">Our Mission</h2>
          <p>
            To empower hospitality teams with data-driven tools that help them understand
            guest sentiment in real time, so they can make faster decisions, improve service
            quality, and build lasting guest relationships.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-card">
          <h2 className="page-heading">How It Works</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>1. Review Input</h3>
              <p>
                Paste guest reviews from your property management system, OTA, or manually
                enter feedback from surveys and comment cards.
              </p>
            </div>
            <div className="feature-card">
              <h3>2. AI Analysis</h3>
              <p>
                Our ML model analyzes the text and assigns a sentiment label: positive,
                neutral, or negative with confidence scoring.
              </p>
            </div>
            <div className="feature-card">
              <h3>3. Dashboard View</h3>
              <p>
                See trends, spot recurring issues, and track sentiment over time with
                interactive charts and summaries.
              </p>
            </div>
            <div className="feature-card">
              <h3>4. Take Action</h3>
              <p>
                Get alerts on negative reviews, respond to guests, and follow up with
                your team to improve the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-card">
          <h2 className="page-heading">Key Features</h2>
          <div className="about-list">
            <div className="list-item">
              <h3>Real-time sentiment analysis</h3>
              <p>
                Classify reviews in seconds using advanced NLP (natural language processing)
                technology that understands context and nuance.
              </p>
            </div>
            <div className="list-item">
              <h3>Responsive, mobile-friendly dashboard</h3>
              <p>
                Access your sentiment data on any device. Check trends while on the go,
                respond to urgent feedback, and stay ahead of issues.
              </p>
            </div>
            <div className="list-item">
              <h3>Detailed sentiment breakdown</h3>
              <p>
                See how many positive, neutral, and negative reviews you've received.
                Identify patterns and opportunities for improvement at a glance.
              </p>
            </div>
            <div className="list-item">
              <h3>Secure and private</h3>
              <p>
                Your guest reviews and property data are encrypted and stored securely.
                We follow industry best practices and comply with data protection regulations.
              </p>
            </div>
            <div className="list-item">
              <h3>Easy integration</h3>
              <p>
                No complex setup required. Sign in, paste reviews, and start analyzing
                in minutes. Works with any property management system.
              </p>
            </div>
            <div className="list-item">
              <h3>Actionable insights</h3>
              <p>
                Beyond classification, see what guests love and what needs improvement.
                Use this data to train your team and refine your service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-card">
          <h2 className="page-heading">Who We Serve</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Hotels & Resorts</h3>
              <p>
                Manage feedback from hundreds of guests and identify service gaps quickly.
              </p>
            </div>
            <div className="feature-card">
              <h3>Bed & Breakfasts</h3>
              <p>
                Understand your guests better and build personal relationships based on
                feedback insights.
              </p>
            </div>
            <div className="feature-card">
              <h3>Vacation Rentals</h3>
              <p>
                Track sentiment across multiple properties and improve your portfolio's
                ratings and reviews.
              </p>
            </div>
            <div className="feature-card">
              <h3>Hospitality Groups</h3>
              <p>
                Compare sentiment across locations, benchmark performance, and share best
                practices across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-card">
          <h2 className="page-heading">Why Choose Us?</h2>
          <div className="about-list">
            <div className="list-item">
              <h3>Fast and Accurate</h3>
              <p>
                Powered by advanced machine learning with 95%+ accuracy on sentiment
                classification across multiple languages.
              </p>
            </div>
            <div className="list-item">
              <h3>User-Friendly Design</h3>
              <p>
                Clean, intuitive interface that requires no training. Your team can start
                using it immediately.
              </p>
            </div>
            <div className="list-item">
              <h3>Affordable & Scalable</h3>
              <p>
                Flexible pricing that grows with your property. Analyze thousands of
                reviews without breaking the bank.
              </p>
            </div>
            <div className="list-item">
              <h3>24/7 Support</h3>
              <p>
                Our team is here to help. Live chat, email support, and comprehensive
                documentation available anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-card">
          <h2 className="page-heading">Get Started Today</h2>
          <p>
            Join hundreds of hospitality teams who are using sentiment analysis to improve
            guest satisfaction and drive business growth. Sign up for free and analyze your
            first batch of reviews in minutes.
          </p>
          <div className="cta-buttons">
            <a href="/login" className="button primary">
              Sign in to your account
            </a>
            <a href="/" className="button secondary">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;