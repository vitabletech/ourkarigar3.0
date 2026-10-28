import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import BuilderMascot from "@/components/BuilderMascot";
import VitableLeadBanner from "@/components/VitableLeadBanner";

const siteUrl = "https://ourkarigar.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "OurKarigar | Electronics & LED TV Repair in Gwalior", template: "%s | OurKarigar" },
  description: "Home service for LED TV, AC PCB, induction, microwave and electronics repair in Gwalior. Call or WhatsApp OurKarigar for a diagnosis.",
  keywords: ["LED TV repair Gwalior", "electronics repair Gwalior", "AC PCB repair", "TV wall mounting Gwalior", "OurKarigar"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", url: siteUrl, siteName: "OurKarigar", title: "OurKarigar — Electronics Repair in Gwalior", description: "Practical electronics repair and home service in Gwalior since 2018.", images: [{ url: "/images/repair-workbench.jpg", width: 1200, height: 630, alt: "Electronics repair workbench" }] },
  twitter: { card: "summary_large_image", title: "OurKarigar — Electronics Repair in Gwalior", description: "LED TV, PCB and home appliance repair in Gwalior.", images: ["/images/repair-workbench.jpg"] },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1d5b46" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body suppressHydrationWarning><ScrollEffects/><Header />{children}<VitableLeadBanner/><Footer /><div className="floating-mascot"><BuilderMascot/></div><div className="float"><a className="wa" href="https://wa.me/917723062912?text=Hello%20OurKarigar%2C%20I%20need%20a%20repair" aria-label="Chat on WhatsApp"><i className="fa-brands fa-whatsapp" /></a><a className="call" href="tel:+917723062912" aria-label="Call OurKarigar"><i className="fa-solid fa-phone" /></a></div></body></html>;
}
