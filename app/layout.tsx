import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NurBeauty — Ламинирование ресниц и бровей в Новосибирске",
  description: "NurBeauty — сертифицированный мастер Нигора. Ламинирование ресниц и бровей с выездом на дом в Новосибирске.",
  keywords: ["NurBeauty", "ламинирование ресниц", "ламинирование бровей", "Новосибирск", "выезд на дом"],
  openGraph: {
    title: "NurBeauty — Ламинирование ресниц и бровей в Новосибирске",
    description: "Сертифицированный мастер с выездом на дом. Запись онлайн.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}