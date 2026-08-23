import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const INK = "#141210";

export default function JournalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 24px",
          background: "#fff",
        }}
      >
        <Link
          href="/stories"
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontSize: 26,
            color: INK,
          }}
        >
          54Journal
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <div style={{ width: 26, height: 2, background: INK, marginBottom: 6 }} />
          <div style={{ width: 26, height: 2, background: INK }} />
        </button>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
