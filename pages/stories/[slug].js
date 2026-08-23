import Head from "next/head";
import { getStoryBySlug, getAllStories } from "../../lib/storiesData";
import JournalHeader from "../../components/JournalHeader";
import HireTalentButton from "../../components/HireTalentButton";
import NewsletterSignup from "../../components/NewsletterSignup";

const INK = "#141210";
const PAPER = "#faf8f4";
const DIM = "#7a746a";

export default function StoryDetail({ story }) {
  const fullName = [story.firstName, story.lastName].filter(Boolean).join(" ");
  const midQuoteAfter = Math.min(3, story.qa.length - 1);

  return (
    <div style={{ background: PAPER, minHeight: "100vh", color: INK }}>
      <Head>
        <title>{fullName} — 54Journal</title>
      </Head>

      <JournalHeader />

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 24px 0" }}>
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.25,
            marginBottom: 18,
          }}
        >
          {story.title}
        </h1>

        <div
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            color: DIM,
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            marginBottom: 28,
          }}
        >
          <span>{story.readTime}</span>
          <span>&bull;</span>
          <span>PUBLISHED {story.published}</span>
        </div>
      </main>

      {/* Full-bleed gallery */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginBottom: 48,
        }}
      >
        {story.gallerySeeds.map((seed) => (
          <div
            key={seed}
            style={{
              width: "100%",
              aspectRatio: "4 / 5",
              backgroundImage: `url(https://picsum.photos/seed/54ruumgallery${seed}/1000/1250)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px 40px" }}>
        <p
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(24px, 4vw, 34px)",
            lineHeight: 1.35,
            marginBottom: 36,
          }}
        >
          &ldquo;{story.openingQuote}&rdquo;
        </p>

        <p
          style={{
            color: DIM,
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            lineHeight: 1.8,
            marginBottom: 48,
          }}
        >
          {story.bio}
        </p>

        {/* Q&A interview */}
        {story.qa.map((item, i) => (
          <div key={i}>
            <div style={{ marginBottom: 40 }}>
              <h3
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 600,
                  fontSize: 20,
                  marginBottom: 12,
                }}
              >
                {item.question}
              </h3>
              <p
                style={{
                  color: "#2a2620",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                }}
              >
                {item.answer}
              </p>
            </div>

            {i === midQuoteAfter && (
              <p
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: 22,
                  lineHeight: 1.5,
                  color: INK,
                  borderLeft: `3px solid ${INK}`,
                  paddingLeft: 24,
                  margin: "0 0 40px",
                }}
              >
                {story.midQuote}
              </p>
            )}
          </div>
        ))}

        {/* Credits */}
        <div
          style={{
            borderTop: `1px solid rgba(20,18,16,0.12)`,
            paddingTop: 28,
            marginBottom: 40,
          }}
        >
          <h4
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              letterSpacing: 2,
              color: DIM,
              marginBottom: 18,
            }}
          >
            CREDITS
          </h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 15,
            }}
          >
            <div>
              <span style={{ color: DIM }}>Photography&nbsp;&nbsp;</span>
              <b>{story.credits.photography}</b>
            </div>
            <div>
              <span style={{ color: DIM }}>Text&nbsp;&nbsp;</span>
              <b>{story.credits.text}</b>
            </div>
            <div>
              <span style={{ color: DIM }}>Curation&nbsp;&nbsp;</span>
              <b>{story.credits.curation}</b>
            </div>
          </div>
        </div>

        {/* Share row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 64,
            paddingBottom: 40,
            borderBottom: `1px solid rgba(20,18,16,0.12)`,
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              letterSpacing: 1.5,
              color: DIM,
            }}
          >
            SHARE THIS STORY
          </span>
          {["X", "IG", "FB", "Link"].map((label) => (
            <button
              key={label}
              className="btn-outline-dark"
              style={{
                border: `1px solid rgba(20,18,16,0.2)`,
                background: "transparent",
                borderRadius: 999,
                padding: "8px 16px",
                fontSize: 13,
                cursor: "pointer",
                color: INK,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <NewsletterSignup />
      </main>

      <div style={{ height: 40 }} />

      <HireTalentButton />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllStories().map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const story = getStoryBySlug(params.slug);
  return { props: { story } };
}
