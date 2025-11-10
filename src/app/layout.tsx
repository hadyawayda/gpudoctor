import type { Metadata } from "next";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GPU Doctor",
    template: "%s | GPU Doctor",
  },
  description:
    "Expert GPU diagnostics, repairs, and performance upgrades delivered with meticulous attention to detail.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background-base text-slate-100 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
