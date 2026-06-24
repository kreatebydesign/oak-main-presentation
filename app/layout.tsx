import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Pinyon_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oak + Main — Brand Identity",
  description: "A women's boutique in Roseburg, Oregon. Timeless. Authentic. Curated.",
  openGraph: {
    title: "Oak + Main",
    description: "Thoughtfully curated for everyday life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable} ${pinyonScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
