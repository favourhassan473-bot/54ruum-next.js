import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  { seed: 61, name: "Mohamed Mejri", country: "Tunisia" },
  { seed: 62, name: "Mutumbi Lungu", country: "Zambia" },
  { seed: 63, name: "Thabang Ntlale", country: "Lesotho" },
  { seed: 64, name: "Ololade Olawale", country: "Nigeria" },
  { seed: 65, name: "Amara Okonkwo", country: "Kenya" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const current = SLIDES[slide];

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 600,
        width: "100%",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <Head>
        <title>54Ruum — Launching Soon</title>
      </Head>

      {SLIDES.map((s, i) => (
        <div
          key={s.seed}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(https://picsum.photos/seed/54ruumhero${s.seed}/1200/2000)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === slide ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,.35) 65%, rgba(0,0,0,.75) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 28,
          left: 28,
          fontFamily: "'Fraunces', serif",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 22,
          color: "#fff",
        }}
      >
        54Ruum
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0 28px 40px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "block",
            color: "#fff",
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            marginBottom: 10,
          }}
        >
          Launching soon
        </span>
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 400,
            fontSize: "clamp(26px, 6vw, 38px)",
            lineHeight: 1.3,
            color: "#fff",
            marginBottom: 28,
          }}
        >
          Join Africa&apos;s{" "}
          <i style={{ fontStyle: "italic" }}>growing community</i>
          <br />
          of image-makers
        </h1>

        <Link
          href="/claim"
          className="btn-light"
          style={{
            display: "inline-block",
            width: "100%",
            maxWidth: 340,
            background: "#fff",
            color: "#141210",
            padding: "18px",
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 17,
            marginBottom: 24,
          }}
        >
          Claim your username
        </Link>

        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
          }}
        >
          Work by <b>{current.name}</b> {current.country}
        </p>
      </div>
    </div>
  );
}
