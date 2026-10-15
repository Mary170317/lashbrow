import { AnimatedBg } from "@/components/ui/AnimatedBg";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section" style={{ background: "#F5CED8" }}>
      <AnimatedBg />
      <div className="container-page" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
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
        </Reveal>

        <div className="grid-3" style={{ maxWidth: 900, margin: "0 auto" }}>
          {[
            { title: "Сертифицированный мастер", text: "Прошла обучение по авторским курсам" },
            { title: "Индивидуальный подход", text: "Подбираю форму и цвет под ваш тип лица" },
            { title: "Выезд на дом", text: "Приезжаю с полным набором оборудования" },
          ].map((f, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <div className="card" style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, color: "#1a1a1a" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}