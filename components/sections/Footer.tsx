export function Footer() {
  return (
    <footer style={{ background: "#E8A8BA", padding: "24px 0" }}>
      <div className="container-page">
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 6,
              color: "#1a1a1a",
              letterSpacing: "0.02em",
            }}
          >
            NurBeauty
          </h2>
          <p style={{ fontSize: 11.5, lineHeight: 1.5, color: "#1a1a1a", marginBottom: 14 }}>
            Ламинирование ресниц и бровей с выездом на дом в Новосибирске
          </p>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px", fontSize: 11.5, marginBottom: 14 }}>
            <a href="#services" style={{ color: "#1a1a1a", textDecoration: "none" }}>Услуги</a>
            <a href="#gallery" style={{ color: "#1a1a1a", textDecoration: "none" }}>Портфолио</a>
            <a href="#about" style={{ color: "#1a1a1a", textDecoration: "none" }}>О мастере</a>
            <a href="#reviews" style={{ color: "#1a1a1a", textDecoration: "none" }}>Отзывы</a>
            <a href="#booking" style={{ color: "#1a1a1a", textDecoration: "none" }}>Записаться</a>
          </div>

          <div style={{ paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.12)", fontSize: 10.5, color: "rgba(0,0,0,0.6)" }}>
            <p>© 2026 NurBeauty. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}