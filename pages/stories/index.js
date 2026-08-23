import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import JournalHeader from "../../components/JournalHeader";
import HireTalentButton from "../../components/HireTalentButton";
import { getStoryCards, getFeaturedStories } from "../../lib/storiesData";

const INK = "#141210";
const PAPER = "#faf8f4";
const DIM = "#7a746a";
const PAGE_SIZE = 24;

export async function getStaticProps() {
  return {
    props: {
      stories: getStoryCards(),
      featured: getFeaturedStories(5),
    },
  };
}

function StoryCard({ story }) {
  return (
    <Link href={`/stories/${story.slug}`} className="story-card-link">
      <div
        style={{
          position: "relative",
          aspectRatio: "3 / 4",
          overflow: "hidden",
          borderRadius: 16,
          backgroundImage: `url(https://picsum.photos/seed/54ruumstory${story.seed}/700/900)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,.55) 100%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 18,
            left: 20,
            color: "#fff",
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontSize: 24,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          {story.firstName}
        </span>
        <span
          style={{
            position: "absolute",
            top: 18,
            right: 20,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          54R &#9733;
        </span>
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 20,
            right: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.85)",
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              lineHeight: 1.4,
            }}
          >
            {story.country}
            <br />
            {story.role}
          </span>
          {story.lastName && (
            <span
              style={{
                color: "#fff",
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              {story.lastName}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Stories({ stories, featured }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [columns, setColumns] = useState(2);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveSlide((s) => (s + 1) % featured.length);
    }, 4500);
    return () => clearInterval(t);
  }, [featured.length]);

  const visible = stories.slice(0, visibleCount);
  const hasMore = visibleCount < stories.length;
  const current = featured[activeSlide];

  return (
    <div style={{ background: PAPER, minHeight: "100vh", color: INK }}>
      <Head>
        <title>54Journal</title>
      </Head>

      <JournalHeader />

      <main
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 100px" }}
      >
        {/* Featured carousel */}
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            aspectRatio: "4 / 5",
            maxWidth: 460,
            margin: "0 auto 16px",
            backgroundImage: `url(https://picsum.photos/seed/54ruumfeatured${current.seed}/700/900)`,
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
          <div
            style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}
          >
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
              <span>&#9660;</span> This week
            </div>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 32,
                color: "#fff",
                marginBottom: 6,
              }}
            >
              {current.firstName} {current.lastName}
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: 14,
                marginBottom: 20,
              }}
            >
              {current.tagline.charAt(0).toUpperCase() +
                current.tagline.slice(1)}
            </p>
            <Link
              href={`/stories/${current.slug}`}
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 40,
          }}
        >
          {featured.map((f, i) => (
            <button
              key={f.slug}
              onClick={() => setActiveSlide(i)}
              aria-label={`Show featured story ${i + 1}`}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background: i === activeSlide ? INK : "rgba(20,18,16,0.25)",
              }}
            />
          ))}
        </div>

        {/* Layout toggle + filter */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => setColumns(n)}
                aria-label={`${n} column layout`}
                style={{
                  width: 40,
                  height: 36,
                  border: `1px solid ${columns === n ? INK : "rgba(20,18,16,0.2)"}`,
                  background: columns === n ? INK : "#fff",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
          <button
            style={{
              border: `1px solid rgba(20,18,16,0.2)`,
              background: "#fff",
              padding: "10px 22px",
              borderRadius: 999,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            &#8801; Filter
          </button>
        </div>

        {/* Category feature cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "16 / 9",
              backgroundImage: `url(https://picsum.photos/seed/54ruumspotlight/900/500)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.6) 100%)",
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
              SPOTLIGHT: MODEL
            </span>
          </div>
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "16 / 9",
              backgroundImage: `url(https://picsum.photos/seed/54ruumnews/900/500)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.6) 100%)",
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
        </div>

        {/* The Ruum teaser */}
        <div
          style={{
            textAlign: "center",
            padding: "20px 0 56px",
            borderTop: `1px solid rgba(20,18,16,0.08)`,
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              letterSpacing: 2,
              color: DIM,
              display: "block",
              marginBottom: 12,
            }}
          >
            THE RUUM
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(26px, 4vw, 38px)",
              marginBottom: 12,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Showcasing Africa&apos;s Talent to the World
          </h2>
          <p
            style={{
              color: DIM,
              fontSize: 15,
              maxWidth: 440,
              margin: "0 auto",
            }}
          >
            We connect African photographers across the continent with
            opportunities, features, and each other.
          </p>
        </div>

        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(28px, 5vw, 44px)",
            marginBottom: 8,
          }}
        >
          Stories
        </h1>
        <p
          style={{
            color: DIM,
            fontSize: 13,
            fontFamily: "'IBM Plex Mono', monospace",
            marginBottom: 32,
          }}
        >
          Showing {visible.length} of {stories.length}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: 20,
          }}
        >
          {visible.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>

        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="btn-dark"
              style={{
                background: INK,
                color: PAPER,
                border: "none",
                padding: "14px 32px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                borderRadius: 999,
                cursor: "pointer",
              }}
            >
              Load more stories
            </button>
          </div>
        )}
      </main>

      <HireTalentButton />
    </div>
  );
}
