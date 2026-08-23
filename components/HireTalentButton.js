import Link from "next/link";

const INK = "#141210";

export default function HireTalentButton() {
  return (
    <Link
      href="/rtm"
      className="btn-dark"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 60,
        background: INK,
        color: "#fff",
        border: "none",
        padding: "16px 26px",
        borderRadius: 999,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: 15,
        cursor: "pointer",
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        textDecoration: "none",
        display: "inline-block",
      }}
    >
      Hire Talent
    </Link>
  );
}
