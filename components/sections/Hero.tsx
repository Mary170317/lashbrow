import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
    </section>
  );
}