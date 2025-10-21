import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import { minionSerif, bahnschrift } from "@/app/fonts/fonts";
import TopNav from "@/components/top-nav/TopNav";
import Modal from "@/components/Modal";
import Footer from "@/sections/footer";


export const metadata: Metadata = {
  title: "Swami Associates",
  description: "Civil engineering and Building construction in Mettupalayam. Swami Associates. Engineers and Builders. 2B CRK Building, Bunglowmedu Mettupalayam.",
  openGraph: {
    title: 'Swami Associates',
    description: 'Civil engineering and Building construction in Mettupalayam',
    url: 'https://swami-associates.in/',
    siteName: 'Swami Associates',
    images: [
      {
        url: 'https://swami-associates.in/logo.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://swami-associates.in/logo.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${minionSerif.variable} ${bahnschrift.variable} font-bahnschrift  antialiased`}>
        <header className="fixed top-0 z-50 w-full">
          <TopNav />
        </header>
        {children}
        <Footer />

        <Modal />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
