import Image from "next/image";
import { AnimatedBg } from "@/components/ui/AnimatedBg";
import { Reveal } from "@/components/ui/Reveal";

export function Certificates() {
  return (
    <section className="section" style={{ background: "#F5CED8" }}>
      <AnimatedBg />
      <div className="container-page" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <h2 className="section-title">Сертификаты мастера</h2>
        </Reveal>
        <div className="grid-2" style={{ maxWidth: 780, margin: "24px auto 0" }}>
          <Reveal delay={0}>
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: 24, overflow: "hidden", boxShadow: "0 12px 32px rgba(255, 20, 147, 0.2)", background: "#fff" }}>
              <Image src="/images/cert-brow.jpg" alt="Сертификат BROW IS ART" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: 24, overflow: "hidden", boxShadow: "0 12px 32px rgba(255, 20, 147, 0.2)", background: "#fff" }}>
              <Image src="/images/cert-lami.jpg" alt="Сертификат Lami lashes" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}