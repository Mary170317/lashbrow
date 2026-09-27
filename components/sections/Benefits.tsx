const items = [
  {
    title: "Чистый процесс записи",
    text: "Удобный процесс, персональный подход и высокое качество услуг",
  },
  {
    title: "Выстроен процесс записи",
    text: "Мы создали максимально комфортный процесс записи для клиента",
  },
  {
    title: "Персональное подтверждение",
    text: "Мастер подтвердит время и адрес, чтобы вы были уверены",
  },
  {
    title: "Выезд со всем оборудованием",
    text: "Мастер приезжает со всем необходимым и премиальными материалами",
  },
];

export function Benefits() {
  return (
    <section className="section" style={{ background: "#F5CED8" }}>
      <div className="container-page">
        <h2 className="section-title">
          Преимущества записи на процедуру ламинирования ресниц и бровей
        </h2>

        <div className="grid-4" style={{ maxWidth: 1080, margin: "0 auto" }}>
          {items.map((b, i) => (
            <div key={i} className="card" style={{ padding: 16 }}>
              <h3
                style={{
                  fontSize: 13.5,
                  fontWeight: 600,
                  marginBottom: 8,
                  color: "#1a1a1a",
                  lineHeight: 1.35,
                }}
              >
                {b.title}
              </h3>
              <p style={{ fontSize: 11.5, color: "#666", lineHeight: 1.5 }}>
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}