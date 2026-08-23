import Link from "next/link";

const INK = "#141210";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  const linkStyle = {
    display: "block",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
    fontSize: 22,
    letterSpacing: 1,
    color: INK,
    padding: "16px 0",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#fff",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "32px 0 8px",
        }}
      >
        <span
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontSize: 30,
            color: INK,
          }}
        >
          54Journal
        </span>
      </div>

      <nav style={{ padding: "24px 24px 0", flex: 1 }}>
        <Link href="/stories" style={linkStyle} onClick={onClose}>
          EXPLORE
        </Link>
        <Link href="/stories" style={linkStyle} onClick={onClose}>
          LATEST
        </Link>
        <Link href="/stories" style={linkStyle} onClick={onClose}>
          STORIES
        </Link>
        <Link href="/about" style={linkStyle} onClick={onClose}>
          THE RUUM
        </Link>
        <Link
          href="/54grid"
          onClick={onClose}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            padding: "16px 0",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 22,
              color: INK,
            }}
          >
            54grid
          </span>
          <span
            style={{
              background: INK,
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 999,
            }}
          >
            New
          </span>
        </Link>
      </nav>

      <div
        style={{
          padding: "0 24px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <Link
          href="/submit-story"
          onClick={onClose}
          style={{
            display: "block",
            textAlign: "center",
            border: `1px solid rgba(20,18,16,0.25)`,
            background: "#fff",
            color: INK,
            padding: "16px 20px",
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Submit your story
        </Link>
        <Link
          href="/rtm"
          onClick={onClose}
          style={{
            display: "block",
            textAlign: "center",
            border: "none",
            background: INK,
            color: "#fff",
            padding: "16px 20px",
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Hire Talent
        </Link>
      </div>

      <div
        style={{
          borderTop: `1px solid rgba(20,18,16,0.1)`,
          padding: "20px 24px 36px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={onClose}
          style={{
            border: `1px solid rgba(20,18,16,0.25)`,
            background: "#fff",
            color: INK,
            padding: "12px 40px",
            borderRadius: 999,
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
