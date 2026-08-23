import { useState } from "react";

const INK = "#141210";
const DIM = "#8a8578";

export default function NewsletterSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle = {
    width: "100%",
    border: `1px solid rgba(20,18,16,0.25)`,
    borderRadius: 8,
    padding: "14px 16px",
    fontSize: 15,
    marginBottom: 18,
    fontFamily: "'Inter', sans-serif",
    color: INK,
  };

  const labelStyle = {
    display: "block",
    fontSize: 13,
    color: DIM,
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  };

  return (
    <section
      style={{
        background: "#f1ede4",
        padding: "56px 24px",
        borderRadius: 20,
        maxWidth: 520,
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
          letterSpacing: 2,
          color: DIM,
          display: "block",
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        SUBMIT YOUR STORY
      </span>
      <h2
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 500,
          fontSize: 26,
          textAlign: "center",
          marginBottom: 28,
        }}
      >
        Join Our Community
      </h2>

      {submitted ? (
        <p style={{ textAlign: "center", color: DIM, fontSize: 15 }}>
          Thanks for signing up — we&apos;ll be in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>First name</label>
          <input
            style={inputStyle}
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label style={labelStyle}>Last name</label>
          <input
            style={inputStyle}
            placeholder="Your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label style={labelStyle}>Email address</label>
          <input
            style={inputStyle}
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="btn-dark"
            style={{
              width: "100%",
              background: INK,
              color: "#fff",
              border: "none",
              padding: "16px",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              marginTop: 6,
            }}
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
