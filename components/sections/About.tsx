export function About() {
  return (
    <section id="about" className="section" style={{ background: "#F5CED8" }}>
      <div className="container-page">
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.65,
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 36px",
            color: "#1a1a1a",
          }}
        >
          О мастере Нигоре — сертифицированный lash- и brow-мастер, который работает
          с выездом на дом в Новосибирске. Мастер использует только дозволенные
          материалы и соблюдает все нормы, чтобы вы получили идеальный результат.
          Мастер приезжает к клиенту в удобное время.
        </p>

        <div className="grid-3" style={{ maxWidth: 900, margin: "0 auto" }}>
          {[
            {
              title: "Сертифицированный мастер",
              text: "Прошла обучение по авторским курсам",
            },
            {
              title: "Индивидуальный подход",
              text: "Подбираю форму и цвет под ваш тип лица",
            },
            {
              title: "Выезд на дом",
              text: "Приезжаю с полным набором оборудования",
            },
          ].map((f, i) => (
            <div key={i} className="card" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, color: "#1a1a1a" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}