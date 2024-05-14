import type { Metadata } from "next";
import "./globals.css";
import { NavbarComponent } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlightNavigationTab from "@/components/FlightNavigationTab";

export const metadata: Metadata = {
  title: "Dhaka Popular Travel Ltd",
  icons: "/logo.png",
  description: "Dhaka Popular Travel Ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FFFFFF]">
        <NavbarComponent />
        <FlightNavigationTab />
        {children}
        <Footer />
      </body>
    </html>
  );
}
