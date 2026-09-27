import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Services } from "@/components/sections/Services";
import { Certificates } from "@/components/sections/Certificates";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { BookingForm } from "@/components/sections/BookingForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main style={{ paddingTop: 0 }}>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Services />
      <Certificates />
      <Gallery />
      <Reviews />
      <BookingForm />
      <Footer />
    </main>
  );
}