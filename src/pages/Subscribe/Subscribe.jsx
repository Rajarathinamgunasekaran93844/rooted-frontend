import { useState } from "react";
import rootedLogo from "../../assets/rooted_logo.png";
import "./Subscribe.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Subscribe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch("/api/subscriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.message || "We could not save your subscription. Please try again.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", interest: "" });
    } catch (error) {
      setSubmissionError(error.message || "We could not save your subscription. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="subscribe-page">
        <Navbar/>
      <section className="subscribe-section">
        <div className="subscribe-container">

          {/* =========================================
              HERO
          ========================================= */}

          <header className="subscribe-hero">

            <p className="subscribe-eyebrow">
              ROOTED COMMUNITY
            </p>

            <h1 className="subscribe-title">
              STAY ROOTED
            </h1>

            <div className="subscribe-logo">
              <img
                src={rootedLogo}
                alt="ROOTED"
              />
            </div>

          </header>


          {/* =========================================
              CONTENT
          ========================================= */}

          <section className="subscribe-content">

            <div className="subscribe-introduction">

              <span className="subscribe-label">
                JOIN THE JOURNEY
              </span>

              <p>
                Follow the sounds, stories and people behind
                ROOTED. Receive updates about our documentary
                films, field recordings, rare instruments and
                cultural archives.
              </p>

              <p>
                Be part of a growing community working to keep
                traditional music alive and connected to the
                future.
              </p>

            </div>


            {/* =========================================
                FORM
            ========================================= */}

            <div className="subscribe-form-wrapper">

              {!submitted ? (
                <form
                  className="subscribe-form"
                  onSubmit={handleSubmit}
                >

                  {/* NAME */}

                  <div className="subscribe-field">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>


                  {/* EMAIL */}

                  <div className="subscribe-field">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>


                  {/* INTEREST */}

                  <div className="subscribe-field">
                    <label htmlFor="interest">
                      What Interests You?
                    </label>

                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    >
                      <option value="">
                        Select an interest
                      </option>

                      <option value="documentary">
                        Documentary Films
                      </option>

                      <option value="instruments">
                        Rare Instruments
                      </option>

                      <option value="archives">
                        Digital Archives
                      </option>

                      <option value="music">
                        Traditional Music
                      </option>

                      <option value="all">
                        Everything ROOTED
                      </option>
                    </select>
                  </div>


                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="subscribe-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
                    <span>→</span>
                  </button>

                  {submissionError && (
                    <p className="subscribe-error" role="alert">
                      {submissionError}
                    </p>
                  )}


                  {/* PRIVACY */}

                  <p className="subscribe-privacy">
                    By subscribing, you agree to receive
                    occasional updates from ROOTED. We respect
                    your inbox and will never sell your
                    information.
                  </p>

                </form>
              ) : (

                /* =========================================
                   SUCCESS MESSAGE
                ========================================= */

                <div className="subscribe-success">

                  <div className="success-mark">
                    ✓
                  </div>

                  <span className="success-label">
                    WELCOME TO ROOTED
                  </span>

                  <h2>
                    YOU ARE NOW
                    <br />
                    PART OF THE JOURNEY.
                  </h2>

                  <p>
                    Thank you for joining us. We'll keep you
                    connected to the sounds, stories and
                    traditions we're documenting.
                  </p>

                  <button
                    type="button"
                    className="subscribe-again"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmissionError("");
                    }}
                  >
                    SUBSCRIBE ANOTHER EMAIL
                  </button>

                </div>
              )}

            </div>

          </section>


          {/* =========================================
              BOTTOM STATEMENT
          ========================================= */}

          <div className="subscribe-bottom">

            <span></span>

            <p>
              PRESERVING THE PAST.
              <br />
              CARRYING IT FORWARD.
            </p>

            <span></span>

          </div>

        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default Subscribe;
