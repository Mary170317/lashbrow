"use client";
import { useState } from "react";

const navigation = [
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#gallery" },
  { label: "О мастере", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Записаться", href: "#booking" },
];

const documents = [
  {
    label: "Согласие на обработку персональных данных",
    text: "Здесь будет текст согласия на обработку персональных данных. Заполните этот раздел согласно требованиям 152-ФЗ «О персональных данных».",
    highlight: true,
  },
  {
    label: "Политика использования cookie",
    text: "Здесь будет политика использования cookie-файлов. Опишите, какие cookie использует сайт и для чего.",
  },
  {
    label: "Политика конфиденциальности",
    text: "Здесь будет политика конфиденциальности. Опишите, какие данные собираются, как хранятся и как используются.",
  },
  {
    label: "Пользовательское соглашение",
    text: "Здесь будет пользовательское соглашение. Опишите правила использования сайта и услуги мастера.",
  },
  {
    label: "Настройки cookie",
    text: "Здесь будут настройки cookie. Дайте пользователю возможность выбрать, какие cookie использовать.",
    highlight: true,
  },
];

function Accordion({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "18px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.15em",
          color: "#1a1a1a",
          textTransform: "uppercase",
        }}
      >
        <span>{title}</span>
        <span style={{ fontSize: 20, color: "#FF1493", transition: "transform 0.3s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 800 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s ease",
        }}
      >
        <div style={{ paddingBottom: 20 }}>{children}</div>
      </div>
    </div>
  );
}

export function Documents() {
  const [openNav, setOpenNav] = useState(false);
  const [openDocs, setOpenDocs] = useState(true);
  const [openDocIndex, setOpenDocIndex] = useState<number | null>(null);

  return (
    <section className="section" style={{ background: "#E8A8BA", paddingTop: 32, paddingBottom: 32 }}>
      <div className="container-page">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Accordion title="Навигация" isOpen={openNav} onToggle={() => setOpenNav(!openNav)}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {navigation.map((n, i) => (
                <a
                  key={i}
                  href={n.href}
                  style={{
                    fontSize: 13,
                    color: "#1a1a1a",
                    textDecoration: "none",
                    paddingLeft: 4,
                  }}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </Accordion>

          <Accordion title="Документы" isOpen={openDocs} onToggle={() => setOpenDocs(!openDocs)}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {documents.map((d, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenDocIndex(openDocIndex === i ? null : i)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: "10px 4px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontSize: 13,
                      color: d.highlight ? "#FF1493" : "#1a1a1a",
                      textAlign: "left",
                      fontWeight: d.highlight ? 600 : 400,
                    }}
                  >
                    <span>{d.label}</span>
                    <span style={{ fontSize: 14, opacity: 0.6 }}>
                      {openDocIndex === i ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openDocIndex === i ? 300 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 12,
                        lineHeight: 1.6,
                        color: "#444",
                        padding: "4px 4px 12px",
                      }}
                    >
                      {d.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}