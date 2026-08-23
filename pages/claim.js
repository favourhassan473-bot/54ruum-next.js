import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const INK = "#141210";
const DIM = "#8a8578";

export default function Claim() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [error, setError] = useState("");

  const usernameValid = /^[a-z0-9_]{2,24}$/i.test(username.trim());
  const detailsValid = firstName.trim() && lastName.trim() && email.trim();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim(),
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Something went wrong.");
        return;
      }
      router.push(
        `/claim/success?username=${encodeURIComponent(data.username)}`,
      );
    } catch (err) {
      setStatus("error");
      setError("Network error. Try again.");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background: "#fff",
      }}
    >
      <Head>
        <title>Claim your username — 54Ruum</title>
      </Head>

      <div style={{ width: "100%", maxWidth: 420 }}>
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontSize: 36,
            color: INK,
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          54R
        </div>

        {step === 1 ? (
          <>
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 22,
                color: "#4a453d",
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              Enter username
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: `1px solid rgba(20,18,16,0.3)`,
                borderRadius: 8,
                padding: "16px 18px",
                marginBottom: 24,
              }}
            >
              <span style={{ color: DIM, marginRight: 8, fontSize: 17 }}>
                @
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=""
                style={{
                  border: "none",
                  outline: "none",
                  flex: 1,
                  fontSize: 17,
                  color: INK,
                  fontFamily: "'Inter', sans-serif",
                }}
              />
            </div>

            <button
              disabled={!usernameValid}
              onClick={() => setStep(2)}
              className={usernameValid ? "btn-dark" : ""}
              style={{
                width: "100%",
                background: usernameValid ? INK : "#dedad2",
                color: usernameValid ? "#fff" : "#a49f92",
                border: "none",
                padding: "18px",
                borderRadius: 999,
                fontSize: 16,
                fontWeight: 600,
                cursor: usernameValid ? "pointer" : "not-allowed",
                marginBottom: 20,
              }}
            >
              Continue
            </button>

            <p style={{ textAlign: "center", color: DIM, fontSize: 14 }}>
              Own your username before we launch
            </p>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              style={{
                display: "block",
                fontSize: 15,
                color: "#4a453d",
                marginBottom: 8,
              }}
            >
              First name <span style={{ color: "#c0392b" }}>*</span>
            </label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                width: "100%",
                border: `1px solid rgba(20,18,16,0.3)`,
                borderRadius: 8,
                padding: "16px 18px",
                fontSize: 16,
                marginBottom: 20,
                fontFamily: "'Inter', sans-serif",
              }}
            />

            <label
              style={{
                display: "block",
                fontSize: 15,
                color: "#4a453d",
                marginBottom: 8,
              }}
            >
              Last name <span style={{ color: "#c0392b" }}>*</span>
            </label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{
                width: "100%",
                border: `1px solid rgba(20,18,16,0.3)`,
                borderRadius: 8,
                padding: "16px 18px",
                fontSize: 16,
                marginBottom: 20,
                fontFamily: "'Inter', sans-serif",
              }}
            />

            <label
              style={{
                display: "block",
                fontSize: 15,
                color: "#4a453d",
                marginBottom: 8,
              }}
            >
              Email <span style={{ color: "#c0392b" }}>*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                border: `1px solid rgba(20,18,16,0.3)`,
                borderRadius: 8,
                padding: "16px 18px",
                fontSize: 16,
                marginBottom: 10,
                fontFamily: "'Inter', sans-serif",
              }}
            />

            {error && (
              <p
                style={{
                  color: "#c0392b",
                  fontSize: 14,
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!detailsValid || status === "loading"}
              className={detailsValid ? "btn-dark" : ""}
              style={{
                width: "100%",
                background: detailsValid ? INK : "#dedad2",
                color: detailsValid ? "#fff" : "#a49f92",
                border: "none",
                padding: "18px",
                borderRadius: 999,
                fontSize: 16,
                fontWeight: 600,
                cursor: detailsValid ? "pointer" : "not-allowed",
                marginTop: 10,
                marginBottom: 16,
              }}
            >
              {status === "loading" ? "Claiming\u2026" : "Claim username"}
            </button>

            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                onClick={() => setStep(1)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#4a453d",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                &larr; Go back
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
