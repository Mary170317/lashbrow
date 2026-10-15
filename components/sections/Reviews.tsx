import { AnimatedBg } from "@/components/ui/AnimatedBg";
import { Reveal } from "@/components/ui/Reveal";

const reviews = [
  {
    name: "Анна С.",
    text: "Здравствуйте! Всё комфортно, результат радует. После прошлого мастера, который сжёг мне ресницы на ламинировании, я очень боялась, но вы сделали всё прекрасно — и ламинирование ресниц, и ламинирование бровей. Огромное спасибо! Буду вас рекомендовать.",
  },
  {
    name: "Ольга К.",
    text: "Хочу выразить вам огромную благодарность от всей души. Для меня, как для мамулички, было очень важно найти мастера, который соблюдает все нормы и использует только дозволенные материалы. Нигора — именно такой мастер! Она приехала ко мне со своим стерильным оборудованием, всё аккуратно разложила. Я чувствовала себя максимально комфортно и спокойно. Результат превзошёл все ожидания.",
  },
  {
    name: "Екатерина М.",
    text: "Пользуюсь услугами мастера Нигоры уже второй раз. Хочу отметить пунктуальность, профессиональный подход и соблюдение всех договорённостей. Процедура ламинирования ресниц и бровей выполнена качественно, с учётом индивидуальных особенностей. Мастер приезжает со всем необходимым оборудованием и материалами. Результат сохраняется в течение заявленного срока. Рекомендую как надёжного специалиста в Новосибирске.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="section" style={{ background: "#F5CED8" }}>
      <AnimatedBg />
      <div className="container-page" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <h2 className="section-title">ОТЗЫВЫ</h2>
          <p className="section-subtitle">
            Познакомьтесь с отзывами наших клиентов! Мы гордимся их доверием.
          </p>
        </Reveal>

        <div style={{ maxWidth: 800, margin: "24px auto 0", display: "flex", flexDirection: "column", gap: 14 }}>
          {reviews.map((r, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <div className="card" style={{ padding: "18px 22px" }}>
                <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "#333", marginBottom: 10 }}>
                  {r.text}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#1a1a1a" }}>{r.name}</span>
                  <span style={{ fontSize: 12, color: "#FF1493", letterSpacing: 2 }}>★★★★★</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}