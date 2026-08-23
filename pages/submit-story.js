import { useState } from "react";
import Head from "next/head";
import JournalHeader from "../components/JournalHeader";

const INK = "#141210";
const PAPER = "#faf8f4";
const DIM = "#7a746a";

export default function SubmitStory() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    portfolio: "",
    pitch: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

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
    marginBottom: 20,
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
    <div style={{ background: PAPER, minHeight: "100vh", color: INK }}>
      <Head>
        <title>Submit Your Story — 54Journal</title>
      </Head>

      <JournalHeader />

      <main
        style={{ maxWidth: 520, margin: "0 auto", padding: "48px 24px 100px" }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            letterSpacing: 2,
            color: DIM,
            display: "block",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          FOR PHOTOGRAPHERS &amp; MODELS
        </span>
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(28px, 5vw, 36px)",
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          Submit Your Story
        </h1>

        {submitted ? (
          <p
            style={{
              textAlign: "center",
              color: DIM,
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Thanks for sharing your work with us — our editorial team will
            review your submission and reach out if it&apos;s a fit for an
            upcoming feature.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label style={labelStyle}>Full name</label>
            <input
              style={inputStyle}
              required
              placeholder="Your full name"
              value={form.name}
              onChange={update("name")}
            />

            <label style={labelStyle}>Email address</label>
            <input
              style={inputStyle}
              type="email"
              required
              placeholder="Your email address"
              value={form.email}
              onChange={update("email")}
            />

            <label style={labelStyle}>Country</label>
            <input
              style={inputStyle}
              placeholder="Where are you based?"
              value={form.country}
              onChange={update("country")}
            />

            <label style={labelStyle}>Portfolio / Instagram link</label>
            <input
              style={inputStyle}
              placeholder="Link to your work"
              value={form.portfolio}
              onChange={update("portfolio")}
            />

            <label style={labelStyle}>Tell us about your story</label>
            <textarea
              style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
              placeholder="What's the project, series, or story you'd like to submit?"
              value={form.pitch}
              onChange={update("pitch")}
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
                fontSize: 16,
                cursor: "pointer",
                marginTop: 6,
              }}
            >
              Submit
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
