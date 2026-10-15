"use client";
import { AnimatedBg } from "@/components/ui/AnimatedBg";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  { title: "Ламинирование ресниц", text: "Процедура придаёт ресницам изгиб, объём и насыщенный цвет. Эффект сохраняется до 2-х месяцев.", price: "1600 ₽" },
  { title: "Ламинирование бровей", text: "Процедура придаёт волоскам правильное направление, аккуратную форму и глубину цвета.", price: "1500 ₽" },
  { title: "Комплекс: ресницы и брови", text: "Комплексная процедура для максимального эффекта. Экономия времени и денег.", price: "2700 ₽" },
];

const additional = [
  { title: "Снятие нарощенных ресниц бесплатно при ламинировании ресниц", price: "0 ₽" },
  { title: "Снятие нарощенных ресниц отдельно", price: "500 ₽" },
  { title: "Коррекция бровей", price: "600 ₽" },
  { title: "Окраска бровей", price: "500 ₽" },
];

export function Services() {
  return (
    <section id="services" className="section" style={{ background: "#F5CED8" }}>
      <AnimatedBg />
      <div className="container-page" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <h2 className="section-title">Услуги ламинирования ресниц и бровей</h2>
          <p className="section-subtitle">
            Предлагаем широкий ассортимент услуг ламинирования ресниц и бровей с выездом на дом в Новосибирске.
          </p>
        </Reveal>

        <div className="grid-3" style={{ maxWidth: 940, margin: "0 auto 20px" }}>
          {services.map((s, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <div className="card-white" style={{ minHeight: 200 }}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div style={{ paddingTop: 12, borderTop: "1px solid #eee", fontSize: 16, fontWeight: 700, color: "#FF1493" }}>
                  {s.price}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ maxWidth: 940, margin: "0 auto 28px", display: "flex", flexDirection: "column", gap: 10 }}>
          {additional.map((a, i) => (
            <Reveal key={i}>
              <div className="card" style={{ padding: "12px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, borderRadius: 16 }}>
                <span style={{ fontSize: 12.5, color: "#333", flex: 1 }}>{a.title}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#FF1493", whiteSpace: "nowrap" }}>{a.price}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ textAlign: "center" }}>
            <button
              className="btn-pink"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Записаться на процедуру
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}