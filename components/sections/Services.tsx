"use client";

const services = [
  {
    title: "Ламинирование ресниц",
    text: "Процедура придаёт ресницам изгиб, объём и насыщенный цвет. Эффект сохраняется до 2-х месяцев.",
    price: "1600 рублей",
  },
  {
    title: "Ламинирование бровей",
    text: "Процедура придаёт волоскам правильное направление, аккуратную форму и глубину цвета.",
    price: "1500 рублей",
  },
  {
    title: "Комплекс: ресницы и брови",
    text: "Комплексная процедура для максимального эффекта. Экономия времени и денег.",
    price: "2700 рублей",
  },
];

const additional = [
  {
    title: "Снятие нарощенных ресниц бесплатно при ламинировании ресниц",
    price: "0 рублей",
  },
  {
    title: "Снятие нарощенных ресниц отдельно",
    price: "500 рублей",
  },
  {
    title: "Выезд по Новосибирску",
    price: "Уточняется при записи",
  },
];

export function Services() {
  return (
    <section id="services" className="section" style={{ background: "#F5CED8" }}>
      <div className="container-page">
        <h2 className="section-title">Услуги ламинирования ресниц и бровей</h2>
        <p className="section-subtitle">
          Предлагаем широкий ассортимент услуг ламинирования ресниц и бровей с
          выездом на дом в Новосибирске.
        </p>

        <div
          className="grid-3"
          style={{ maxWidth: 940, margin: "0 auto 20px" }}
        >
          {services.map((s, i) => (
            <div key={i} className="card-white" style={{ minHeight: 200 }}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div
                style={{
                  paddingTop: 12,
                  borderTop: "1px solid #eee",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#1a1a1a",
                }}
              >
                {s.price}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            maxWidth: 940,
            margin: "0 auto 28px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {additional.map((a, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: "10px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 12.5, color: "#333", flex: 1 }}>
                {a.title}
              </span>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "#1a1a1a",
                  whiteSpace: "nowrap",
                }}
              >
                {a.price}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            className="btn-pink"
            onClick={() =>
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Записаться на процедуру
          </button>
        </div>
      </div>
    </section>
  );
}