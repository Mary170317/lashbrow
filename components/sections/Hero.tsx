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
        alt="lash & brow"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
      />
      <style>{`
        @media (min-width: 768px) {
          .hero-section {
            height: 100vh !important;
            max-height: none !important;
          }
        }
      `}</style>
    </section>
  );
}