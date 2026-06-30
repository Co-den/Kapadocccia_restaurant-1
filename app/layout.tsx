import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kapadoccia Abuja | Fine Dining & Cave-Inspired Luxury Restaurant",
  description:
    "Kapadoccia Abuja is a premium fine-dining destination where cave-carved architecture, candlelit ambience, and a modern Anatolian-inspired menu meet in the heart of Abuja. Reserve your table for an unforgettable evening.",
  keywords: [
    "Kapadoccia Abuja",
    "fine dining Abuja",
    "luxury restaurant Abuja",
    "best restaurant Abuja",
    "cave restaurant",
    "fine dining Nigeria",
  ],
  openGraph: {
    title: "Kapadoccia Abuja | Where Fine Dining Meets an Unforgettable Cave Experience",
    description:
      "A cave-inspired luxury dining destination in Abuja. Modern Anatolian cuisine, candlelit stone interiors, and live music nightly.",
    type: "website",
    locale: "en_NG",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-ink text-white antialiased"
        style={
          {
            "--font-display": "'Cormorant Garamond', serif",
            "--font-body": "'Inter', sans-serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
