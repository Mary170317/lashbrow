export function Footer() {
  return (
    <footer
      className="section"
      style={{ background: "#E8A8BA", paddingTop: 40, paddingBottom: 40 }}
    >
      <div className="container-page">
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 8,
              color: "#1a1a1a",
            }}
          >
            lash and brow
          </h2>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.5,
              color: "#1a1a1a",
              marginBottom: 24,
            }}
          >
            Ламинирование ресниц и бровей с выездом на дом
            <br />в Новосибирске
          </p>

          <div
            style={{
              fontSize: 13,
              lineHeight: 1.8,
              color: "#1a1a1a",
              marginBottom: 20,
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: 6 }}>Меню:</p>
            <p><a href="#services" style={{ color: "#1a1a1a", textDecoration: "none" }}>Услуги</a></p>
            <p><a href="#gallery" style={{ color: "#1a1a1a", textDecoration: "none" }}>Портфолио</a></p>
            <p><a href="#about" style={{ color: "#1a1a1a", textDecoration: "none" }}>О мастере</a></p>
            <p><a href="#services" style={{ color: "#1a1a1a", textDecoration: "none" }}>Цены</a></p>
            <p><a href="#reviews" style={{ color: "#1a1a1a", textDecoration: "none" }}>Отзывы</a></p>
          </div>

          <div
            style={{
              fontSize: 13,
              lineHeight: 1.8,
              color: "#1a1a1a",
              marginBottom: 24,
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: 6 }}>Контакты:</p>
            <p>Телефон: <a href="tel:+79232231515" style={{ color: "#1a1a1a", textDecoration: "none" }}>8 923 223 15 15</a></p>
            <p>WhatsApp</p>
            <p>Telegram</p>
            <p>VK</p>
            <p style={{ marginTop: 10 }}>Город Новосибирск</p>
            <p>Часы работы: ежедневно с 9:00 до 21:00</p>
            <p>Кнопка: Записаться</p>
          </div>

          <div
            style={{
              paddingTop: 16,
              borderTop: "1px solid rgba(0,0,0,0.15)",
              fontSize: 11.5,
              color: "rgba(0,0,0,0.6)",
            }}
          >
            <p>Политика конфиденциальности</p>
            <p style={{ marginTop: 4 }}>
              © 2026 Нигора lash and brow. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}