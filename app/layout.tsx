import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
