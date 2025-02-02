import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const minionSerif = localFont({
  src: [{
    path: "./fonts/MinionPro-Regular.otf",
    style: "normal",
  },
  {
    path: "./fonts/MinionPro-MediumIt.otf",
    style: "italic",
  }
  ],
  variable: "--font-minion",
});

const bahnschrift = localFont({
  src: "./fonts/bahnschrift.ttf",
  variable: "--font-bahnschrift",
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
        style={{ fontFamily: "var(--font-bahnschrift)" }}
        className={`${minionSerif.variable} ${bahnschrift.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
