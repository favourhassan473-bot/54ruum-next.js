import Head from "next/head";
import JournalHeader from "../components/JournalHeader";

const INK = "#141210";
const PAPER = "#faf8f4";
const DIM = "#7a746a";

const BRIEF_SUBJECT = "Project Inquiry: RTM";
const BRIEF_BODY = `Please fill out the details below and hit send. We'll review your brief and pair you with the best fit for your project.

PROJECT TYPE
(e.g. Editorial, Portraiture, Staff headshots, Documentary film)

LOCATION
(Where will the project take place?)

TIMELINE
(Preferred dates or deadlines)

PROJECT SCOPE
(Briefly describe the vision and the deliverables needed)

ESTIMATED BUDGET
(This helps us match you with the correct tier of talent)`;

const MAILTO = `mailto:community@54ruum.com?subject=${encodeURIComponent(
  BRIEF_SUBJECT,
)}&body=${encodeURIComponent(BRIEF_BODY)}`;

export default function RTM() {
  return (
    <div style={{ background: PAPER, minHeight: "100vh", color: INK }}>
      <Head>
        <title>Ruum Talent Management — 54Journal</title>
      </Head>

      <JournalHeader />

      <main
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "48px 24px 100px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            letterSpacing: 2,
            color: DIM,
            display: "block",
            marginBottom: 10,
          }}
        >
          RUUM TALENT MANAGEMENT
        </span>
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(28px, 5vw, 40px)",
            marginBottom: 36,
          }}
        >
          Hire Africa&apos;s best creative talent
        </h1>

        <p
          style={{
            color: DIM,
            fontSize: 16,
            lineHeight: 1.8,
            marginBottom: 24,
          }}
        >
          We&apos;ve documented some of Africa&apos;s most talented
          photographers, filmmakers, and creative directors for over a year.
          Now, we&apos;re making it easy for you to hire them.
        </p>

        <p
          style={{
            color: DIM,
            fontSize: 16,
            lineHeight: 1.8,
            marginBottom: 24,
          }}
        >
          Whether you&apos;re looking for a lead creator for a commercial shoot
          or professional project documentation, we take the guesswork out of
          your search by pairing your project with the best hands through{" "}
          <b style={{ color: INK }}>Ruum Talent Management (RTM)</b>.
        </p>

        <p
          style={{
            color: DIM,
            fontSize: 16,
            lineHeight: 1.8,
            marginBottom: 40,
          }}
        >
          Want to learn about the process? Hit the button below. Convinced?
          Submit your brief now.
        </p>

        <a
          href="#"
          className="btn-dark"
          style={{
            display: "block",
            background: INK,
            color: "#fff",
            padding: "16px",
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 16,
            marginBottom: 14,
            textDecoration: "none",
          }}
        >
          Learn more &#8599;
        </a>

        <a
          href={MAILTO}
          className="btn-outline-dark"
          style={{
            display: "block",
            border: `1px solid rgba(20,18,16,0.25)`,
            color: INK,
            padding: "16px",
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 16,
            textDecoration: "none",
          }}
        >
          Submit a brief
        </a>
      </main>
    </div>
  );
}
