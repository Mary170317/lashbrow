export function Footer() {
  return (
    <footer style={{ background: "#E8A8BA", padding: "20px 0" }}>
      <div className="container-page">
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 4,
              color: "#1a1a1a",
              letterSpacing: "0.02em",
            }}
          >
            NurBeauty
          </h2>
          <p style={{ fontSize: 11, lineHeight: 1.4, color: "#1a1a1a" }}>
            Ламинирование ресниц и бровей с выездом на дом в Новосибирске
          </p>
        </div>
      </div>
    </footer>
  );
}