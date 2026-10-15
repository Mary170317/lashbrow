"use client";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        width: "100%",
        height: "60vh",
        minHeight: 320,
        maxHeight: 500,
        overflow: "hidden",
        background: "#000",
      }}
    >
      <Image
        src="/images/hero-bg.jpg"
        alt="NurBeauty"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
      />

      {/* Крутящиеся звёзды поверх фото */}
      <span className="hero-star star-sm" style={{ top: "15%", left: "10%", color: "#FF69B4" }}>✦</span>
      <span className="hero-star star-md" style={{ top: "25%", right: "15%", color: "#FF1493" }}>✧</span>
      <span className="hero-star star-lg" style={{ bottom: "20%", left: "15%", color: "#FF69B4" }}>✦</span>
      <span className="hero-star star-sm" style={{ bottom: "25%", right: "10%", color: "#FF1493" }}>✧</span>

      <style>{`
        @media (min-width: 768px) {
          .hero-section {
            height: 100vh !important;
            max-height: none !important;
          }
        }
        .hero-star {
          position: absolute;
          z-index: 5;
          animation: spin 20s linear infinite;
          opacity: 0.7;
          text-shadow: 0 0 20px currentColor;
        }
        .hero-star.star-sm { font-size: 20px; animation-duration: 15s; }
        .hero-star.star-md { font-size: 28px; animation-duration: 25s; }
        .hero-star.star-lg { font-size: 40px; animation-duration: 35s; }
      `}</style>
    </section>
  );
}