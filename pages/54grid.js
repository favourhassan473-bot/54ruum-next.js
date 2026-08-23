import Head from "next/head";
import JournalHeader from "../components/JournalHeader";

const INK = "#141210";
const PAPER = "#faf8f4";
const DIM = "#7a746a";

const DISCUSS_SUBJECT = "New Project Inquiry: 54grid";
const DISCUSS_MAILTO = `mailto:community@54ruum.com?subject=${encodeURIComponent(
  DISCUSS_SUBJECT,
)}`;

export default function FiftyFourGrid() {
  return (
    <div style={{ background: PAPER, minHeight: "100vh", color: INK }}>
      <Head>
        <title>54grid — 54Journal</title>
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
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontSize: 34,
            marginBottom: 24,
          }}
        >
          54Grid
        </div>

        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(24px, 4vw, 30px)",
            lineHeight: 1.35,
            marginBottom: 32,
          }}
        >
          high-performance engineering &amp; direct social impact.
        </h1>

        <p
          style={{
            color: DIM,
            fontSize: 16,
            lineHeight: 1.8,
            marginBottom: 24,
          }}
        >
          54grid is the commercial engineering unit of The Ruum Africa, building
          custom web platforms for organisations that have outgrown templates or
          need complex web solutions.
        </p>

        <p
          style={{
            color: DIM,
            fontSize: 16,
            lineHeight: 1.8,
            marginBottom: 40,
          }}
        >
          We deliver digital credibility through bespoke, high-speed websites
          and apps. Unique to our model, 100% of 54grid profits directly fund
          our community activities and infrastructure at 54Ruum.
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
          explore 54grid &#8599;
        </a>

        <a
          href={DISCUSS_MAILTO}
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
          let&apos;s discuss your next project &#8599;
        </a>
      </main>
    </div>
  );
}
