import Head from "next/head";
import Link from "next/link";
import JournalHeader from "../components/JournalHeader";
import HireTalentButton from "../components/HireTalentButton";

const INK = "#141210";
const NAVY = "#1b2030";
const PAPER = "#faf8f4";
const DIM = "#8a8578";

const FEATURES = [
  {
    icon: "\u{1F4F8}",
    lead: "Features",
    text: "in editorial spotlights, interviews, and documentaries and more.",
  },
  {
    icon: "$",
    lead: "Events",
    text: "like workshops and challenges to keep their creativity flowing.",
  },
  {
    icon: "\u2726",
    lead: "Opportunities",
    text: "like grants, competitions, gigs, etc., are shared in the Ruum for the Ruumers to participate in.",
  },
];

const FLAGS = [
  "\u{1F1EA}\u{1F1F9}", "\u{1F1F2}\u{1F1E6}", "\u{1F1F8}\u{1F1F3}", "\u{1F1FF}\u{1F1E6}",
  "\u{1F1EC}\u{1F1ED}", "\u{1F1E8}\u{1F1E9}", "\u{1F1E7}\u{1F1EF}", "\u{1F1F0}\u{1F1EA}",
  "\u{1F1FF}\u{1F1FC}", "\u{1F1F3}\u{1F1EC}", "\u{1F1F8}\u{1F1FF}", "\u{1F1F2}\u{1F1FC}",
  "\u{1F1E7}\u{1F1EE}", "\u{1F1F1}\u{1F1F8}", "\u{1F1EC}\u{1F1E6}", "\u{1F1FF}\u{1F1F2}",
  "\u{1F1E9}\u{1F1FF}", "\u{1F1F2}\u{1F1EC}", "\u{1F1E8}\u{1F1EE}", "\u{1F1F7}\u{1F1FC}",
  "\u{1F1E6}\u{1F1F4}", "\u{1F1F8}\u{1F1F1}", "\u{1F1E8}\u{1F1F2}", "\u{1F1EA}\u{1F1EC}",
  "\u{1F1F9}\u{1F1FF}", "\u{1F1FA}\u{1F1EC}", "\u{1F1F3}\u{1F1E6}", "\u{1F1E7}\u{1F1FC}",
  "\u{1F1F9}\u{1F1F3}", "\u{1F1F2}\u{1F1F1}", "\u{1F1F9}\u{1F1EC}", "\u{1F1F2}\u{1F1FF}",
  "\u{1F1F8}\u{1F1E9}", "\u{1F1F1}\u{1F1F7}", "\u{1F1EC}\u{1F1F2}", "\u{1F1EC}\u{1F1FC}",
];

export default function About() {
  return (
    <div style={{ background: PAPER, minHeight: "100vh", color: INK }}>
      <Head>
        <title>The Ruum — 54Journal</title>
      </Head>

      <JournalHeader />

      {/* Featured carousel card */}
      <div style={{ padding: "24px" }}>
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            aspectRatio: "4 / 5",
            maxWidth: 460,
            margin: "0 auto",
            backgroundImage: `url(https://picsum.photos/seed/54ruumanniversary/700/900)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.75) 100%)",
            }}
          />
          <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              <span>&#9660;</span> Aug 2026
            </div>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 30,
                color: "#fff",
                marginBottom: 6,
              }}
            >
              54Ruum @ 1
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, marginBottom: 20 }}>
              Reflecting on the past year &amp; the future
            </p>
            <Link
              href="/stories"
              className="btn-outline"
              style={{
                display: "inline-block",
                border: "1px solid #fff",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Discover
            </Link>
          </div>
        </div>
      </div>

      {/* Dark feature panel */}
      <section style={{ background: NAVY, color: "#fff", padding: "56px 24px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              letterSpacing: 2,
              color: "rgba(255,255,255,0.6)",
              display: "block",
              marginBottom: 12,
            }}
          >
            THE RUUM
          </span>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 5vw, 40px)",
              marginBottom: 40,
            }}
          >
            We showcase Africa&apos;s best talent to the world
          </h1>

          {FEATURES.map((f, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  margin: "0 auto 18px",
                }}
              >
                {f.icon}
              </div>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>
                <b>{f.lead}</b> {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision + mission with photo */}
      <section style={{ padding: "56px 24px", textAlign: "center" }}>
        <p style={{ color: DIM, fontSize: 18, lineHeight: 1.6, maxWidth: 480, margin: "0 auto 28px" }}>
          Our vision is to unite photographers from every corner of Africa,
          capturing the heart and soul of the continent.
        </p>

        <Link
          href="#"
          className="btn-outline-dark"
          style={{
            display: "inline-block",
            border: `1px solid rgba(20,18,16,0.25)`,
            color: INK,
            padding: "13px 32px",
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 15,
            marginBottom: 40,
            textDecoration: "none",
          }}
        >
          Learn more
        </Link>

        <div
          style={{
            maxWidth: 460,
            margin: "0 auto 40px",
            borderRadius: 20,
            overflow: "hidden",
            aspectRatio: "4 / 5",
            backgroundImage: `url(https://picsum.photos/seed/54ruummission/700/900)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

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
          THE RUUM
        </span>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(26px, 5vw, 34px)",
            marginBottom: 16,
            maxWidth: 480,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Our mission at The Ruum
        </h2>
        <p style={{ color: DIM, fontSize: 16, lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
          Our mission is to create a thriving community of African
          photographers &mdash; helping them build connections, share their
          work through events, webinars, and media, while opening doors to
          real opportunities across the continent and beyond.
        </p>
      </section>

      {/* Countries flag grid */}
      <section style={{ background: "#f1ede4", padding: "56px 24px", textAlign: "center" }}>
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
          THE RUUM
        </span>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(26px, 5vw, 34px)",
            marginBottom: 32,
          }}
        >
          36/54 countries &amp; counting
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
            gap: 14,
            maxWidth: 460,
            margin: "0 auto",
          }}
        >
          {FLAGS.map((flag, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 10,
                aspectRatio: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              {flag}
            </div>
          ))}
        </div>
      </section>

      {/* Explore more content */}
      <section style={{ padding: "56px 24px 100px" }}>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(24px, 5vw, 32px)",
            marginBottom: 28,
            maxWidth: 480,
            margin: "0 auto 28px",
          }}
        >
          Explore more content
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 480, margin: "0 auto" }}>
          <Link href="/stories" style={{ display: "block" }}>
            <div
              className="story-card-link"
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: "4 / 3",
                backgroundImage: `url(https://picsum.photos/seed/54ruumspotlight2/900/700)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.6) 100%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 18,
                  left: 20,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: 0.5,
                }}
              >
                SPOTLIGHT
              </span>
            </div>
          </Link>

          <Link href="/stories" style={{ display: "block" }}>
            <div
              className="story-card-link"
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: "4 / 3",
                backgroundImage: `url(https://picsum.photos/seed/54ruumnews2/900/700)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.6) 100%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 18,
                  left: 20,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: 0.5,
                }}
              >
                COMPANY NEWS
              </span>
            </div>
          </Link>
        </div>
      </section>

      <HireTalentButton />
    </div>
  );
}