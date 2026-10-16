import type { Metadata } from "next";
import { DM_Sans, Mrs_Saint_Delafield, Playfair_Display } from "next/font/google";
import Shell from "@/components/Shell";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans" });
const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const script = Mrs_Saint_Delafield({ subsets: ["latin"], weight: "400", variable: "--font-signature" });

export const metadata: Metadata = {
  title: { default: "Elena Rostova — Fine Art & Editorial", template: "%s · Elena Rostova" },
  description: "Portraits, landscapes, architecture and nature photography by Elena Rostova.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${script.variable} scroll-smooth`}>
      <body className="m-0 bg-paper font-sans text-ink antialiased selection:bg-[#f3c38f]">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
