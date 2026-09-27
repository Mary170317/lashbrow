import Image from "next/image";

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
      <div className="container-page">
        <h2 className="section-title">Галерея работ мастера Нигоры</h2>
        <p className="section-subtitle">
          Посмотрите примеры работ по ламинированию ресниц и бровей
        </p>

        <div
          className="grid-3"
          style={{ maxWidth: 960, margin: "0 auto" }}
        >
          {works.map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                aspectRatio: "1/1",
                borderRadius: 12,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src={src}
                alt={`Работа ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}