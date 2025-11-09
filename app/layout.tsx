import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Figtree, Instrument_Serif, Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gitcuber | Mobile Developer",
  description: "Full Stack Developer / Designer",
  icons: {
    icon: "/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.className} ${instrumentSerif.className} antialiased bg-white dark:bg-background scroll-smooth`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div style={{ position: "absolute", height: "100%", width: "100%" }}>
            {/* <DarkVeil noiseIntensity={0.02} speed={1} hueShift={4534543} />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" /> */}
          </div>

          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
