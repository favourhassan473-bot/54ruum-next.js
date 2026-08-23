import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const INK = "#141210";
const DIM = "#8a8578";

export default function ClaimSuccess() {
  const router = useRouter();
  const { username } = router.query;

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
        textAlign: "center",
      }}
    >
      <Head>
        <title>Username reserved — 54Ruum</title>
      </Head>

      <div style={{ width: "100%", maxWidth: 380 }}>
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontSize: 36,
            color: INK,
            marginBottom: 36,
          }}
        >
          54R
        </div>

        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: 28,
            color: INK,
            marginBottom: 16,
          }}
        >
          Username reserved!
        </h1>

        <p style={{ color: DIM, fontSize: 15, lineHeight: 1.6, marginBottom: 36 }}>
          {username && <>@{username} </>}You&apos;ll be among the first to
          join 54Ruum when we launch.
        </p>

        <Link
          href="/stories"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: INK,
            color: "#fff",
            padding: "16px 20px",
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 16,
            marginBottom: 14,
          }}
        >
          Discover stories &#8599;
        </Link>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            border: `1px solid rgba(20,18,16,0.25)`,
            color: INK,
            padding: "16px 20px",
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 16,
            marginBottom: 28,
          }}
        >
          Follow 54Ruum
        </a>

        <Link href="/" style={{ color: "#4a453d", fontSize: 15 }}>
          &larr; Back to home
        </Link>
      </div>
    </div>
  );
}
