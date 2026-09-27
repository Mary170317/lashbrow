import Image from "next/image";

export function Certificates() {
  return (
    <section className="section" style={{ background: "#F5CED8" }}>
      <div className="container-page">
        <div
          className="grid-2"
          style={{ maxWidth: 780, margin: "0 auto" }}
        >
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              background: "#fff",
            }}
          >
            <Image
              src="/images/cert-brow.jpg"
              alt="Сертификат BROW IS ART"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              background: "#fff",
            }}
          >
            <Image
              src="/images/cert-lami.jpg"
              alt="Сертификат Lami lashes"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}