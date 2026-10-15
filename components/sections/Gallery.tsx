import Image from "next/image";
import { AnimatedBg } from "@/components/ui/AnimatedBg";
import { Reveal } from "@/components/ui/Reveal";

const works = [
  "/images/work-1.jpg",
  "/images/work-2.jpg",
  "/images/work-3.jpg",
  "/images/work-4.jpg",
  "/images/work-5.jpg",
  "/images/work-6.jpg",
];

export function Gallery() {
  return (
    <section id="gallery" className="section" style={{ background: "#F5CED8" }}>
      <AnimatedBg />
      <div className="container-page" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <h2 className="section-title">Галерея работ мастера Нигоры</h2>
          <p className="section-subtitle">Посмотрите примеры работ по ламинированию ресниц и бровей</p>
        </Reveal>

        <div className="grid-3" style={{ maxWidth: 960, margin: "0 auto" }}>
          {works.map((src, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <div
                className="gallery-item"
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 8px 24px rgba(255, 20, 147, 0.12)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={src}
                  alt={`Работа ${i + 1}`}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.6s" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <style>{`
          .gallery-item:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 20px 48px rgba(255, 20, 147, 0.3) !important;
          }
          .gallery-item:hover img {
            transform: scale(1.1);
          }
        `}</style>
      </div>
    </section>
  );
}