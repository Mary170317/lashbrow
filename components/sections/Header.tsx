"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "О мастере" },
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Портфолио" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#booking", label: "Записаться" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(245,206,216,0.95)" : "rgba(245,206,216,0.7)",
        backdropFilter: "blur(8px)",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="container-page">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <a
            href="#"
            style={{
              fontSize: 12.5,
              fontWeight: 500,
              color: "#1a1a1a",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Ламинирование ресниц и бровей
          </a>

          <nav
            style={{
              display: "flex",
              gap: 26,
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 12.5,
                  color: "#1a1a1a",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
            className="desktop-nav"
          >
            <a
              href="tel:+79232231515"
              style={{
                fontSize: 12.5,
                color: "#1a1a1a",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              8 923 223 15 15
            </a>
            <button
              className="btn-pink"
              onClick={() => scrollTo("booking")}
              style={{ padding: "7px 18px", fontSize: 12 }}
            >
              Записаться
            </button>
          </div>

          <button
            className="mobile-btn"
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
              color: "#1a1a1a",
              display: "none",
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div
            style={{
              paddingTop: 12,
              paddingBottom: 16,
              borderTop: "1px solid rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 13,
                  color: "#1a1a1a",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+79232231515"
              style={{
                fontSize: 13,
                color: "#1a1a1a",
                paddingTop: 10,
                borderTop: "1px solid rgba(0,0,0,0.1)",
                textDecoration: "none",
              }}
            >
              8 923 223 15 15
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}